import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatearMoneda } from "../utils";
import { Error } from "./error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function GuitarraDetalle({ producto, agregarCarrito }) {
  const { name, image, price, description } = producto[0].attributes;
  const imagen = image?.data.attributes.formats.medium.url;
  const desc = description[0].children[0].text;
  const propiedades = description[1].children;

  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState("");
  const [subtotal, setSubTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad === 0) {
      setError("Seleccione la cantidad de articulos");
      return;
    }
    setError("");
    // Creamos el Objeto
    const itemSelect = {
      id: producto[0].id,
      name,
      imagen,
      cantidad,
      price,
      subtotal,
    };
    notify()
    agregarCarrito(itemSelect);

  };

  const notify = ()=>toast.warning("👌 Producto agregado al carrito")

  const calcularSubtotal = (e) => Number(e.target.value * price);

  return (
    <>
      <section className="relative py-14 px-8 grid md:grid-cols-2 items-center bg-white shadow rounded-md">
        <Image
          className="mx-auto block"
          src={imagen}
          height={100}
          width={220}
          alt={`imagen de guitarra-${name}`}
          loading="lazy"
        />
        <section className=" space-y-4">
          <p className="">{desc}</p>
          <p className="text-2xl text-orange-400 font-bold">
            Precio:{" "}
            <span className="font-normal text-gray-800">
              {formatearMoneda(price)}
            </span>
          </p>
          <ul>
            <p className="font-bold text-lg mb-2">Caracteristicas</p>
            {propiedades.map((pro, index) => (
              <li className="list-disc" key={index}>
                {pro?.children[0]?.text}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="pt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="cantidad" className="font-bold text-lg">
                Cantidad
              </label>
              <select
                onChange={(e) => {
                  setCantidad(+e.target.value);
                  const resultado = calcularSubtotal(e);
                  setSubTotal(resultado);
                }}
                id="cantidad"
                className="border w-[220px] text-center py-2 rounded-md font-bold border-gray-400"
              >
                <option value="0"> --- Seleccione ---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {error && <Error>{error}</Error>}
            <div className="mt-6 lg:mt-10 lg:w-1/2 mx-auto">
              <button
                type="submit"
                className="w-full py-2 bg-red-400 text-white uppercase font-semibold rounded-md hover:bg-red-500 transition-all hover:tracking-widest"
              >
                Agregar al Carrito
              </button>
            </div>
          </form>

          <div className="top-0 right-4 absolute">
            <Link className="text-blue-600" href="/tienda">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          </div>
        </section>
      </section>
      <ToastContainer 
        icon={false}
      />
    </>
  );
}
