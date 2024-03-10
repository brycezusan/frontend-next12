import { useState } from "react";
import Image from "next/image";
import { formatearMoneda } from "../utils";


export default function Articulo({
  articulo,
  eliminarProducto,
  actualizarCantidad,
  notify
}) {
  const { name, id, imagen, cantidad, price, subtotal } = articulo;

  const [result, setResult] = useState(subtotal);

  const handleChange = (e) => {
    const subtotal = e.target.value * price;
    setResult(subtotal);
    const articuloUpdate = { ...articulo, cantidad: +e.target.value, subtotal };
    actualizarCantidad(articuloUpdate);
  };

  const deleteProduct = ()=>{
    notify()
    setTimeout(() => {
      eliminarProducto(id)
    }, 500);
  }
  

  return (
    <>
      <article className="relative bg-white p-4 rounded shadow grid gap-4 justify-center lg:grid-cols-2 lg:items-center">
        <Image
          src={imagen}
          width={120}
          height={60}
          alt={`articulo-${name}`}
          className="mx-auto"
        />
        <div className="space-y-3">
          <h2 className="text-center text-2xl lg:text-left text-yellow-400 font-semibold">
            {name}
          </h2>
          <p className="text-xl text-slate-600 font-bold">
            Precio: <span>{formatearMoneda(price)}</span>
          </p>
          <p className="text-xl text-slate-600 font-bold">
            Subtotal: <span>{formatearMoneda(result)}</span>
          </p>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cantidad"
              className="font-bold text-slate-600 text-lg"
            >
              Cantidad
            </label>
            <select
              id="cantidad"
              value={cantidad}
              onChange={handleChange}
              className="border w-[220px] lg:w-[180px] text-center py-2 rounded-md font-bold border-gray-400"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button
            onClick={deleteProduct}
            className="absolute text-red-700 top-0 right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </article>
     
    </>
  );
}
