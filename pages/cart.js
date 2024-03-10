import Link from "next/link";
import Articulo from "../components/articulo";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { formatearMoneda } from "../utils";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({
  carrito,
  eliminarProducto,
  actualizarCantidad,
}) {
  const carritoContent = Object.keys(carrito).length > 0;
  const [total, setTotal] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);
  const [igv, setIgv] = useState(0);

  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, acum) => total + acum.subtotal,
      0
    );
    const igv = calcularTotal * 0.15;
    setIgv(igv);
    setTotal(calcularTotal);
    setTotalPagar(calcularTotal + igv);
  }, [carrito]);

  const notify = ()=>toast.warning("💥 Producto Removido")

  return (
    <Layout title="carrito" description="Compras,Mejores Instrumentos,Pagos">
      <h2 className="title">
        {!carritoContent ? "Carrito Vacio" : "Carrito de Compras"}
      </h2>
      {carritoContent ? (
        <div className="grid gap-6 items-start md:grid-cols-2 py-12">
          <section className="bg-red-50 p-8 flex flex-col gap-2 overflow-y-scroll h-[85vh]">
            <h3 className="text-xl text-center font-bold pb-4">
              Lista de Articulos
            </h3>
            {carrito.map((art) => (
              <Articulo
                key={art.id}
                articulo={art}
                eliminarProducto={eliminarProducto}
                actualizarCantidad={actualizarCantidad}
                notify={notify}
              />
            ))}
          </section>
          <section className="">
            <div className="sticky top-24 bg-gray-100 p-10 ">
              <h3 className="text-xl text-center font-bold pb-4">
                Resumen Compras
              </h3>
              <div className="bg-white p-4 shadow space-y-4">
                <p className="font-bold text-lg text-orange-700">
                  Total de Compras:{" "}
                  <span className="text-slate-700">
                    {formatearMoneda(total)}
                  </span>
                </p>
                <p className="font-bold text-lg text-orange-700">
                  15% igv:{" "}
                  <span className="text-slate-700">{formatearMoneda(igv)}</span>
                </p>
                <p className="font-bold text-lg text-orange-700">
                  Total a pagar:{" "}
                  <span className="text-slate-700">
                    {formatearMoneda(totalPagar)}
                  </span>
                </p>
              </div>
            </div>
          </section>
          <ToastContainer icon={false} />
        </div>
      ) : (
        <>
          <h2 className="text-center py-8 px-4 text-3xl text-red-400 bg-red-100 my-12 font-semibold uppercase rounded">
            Aun no selecciona articulos para su compra
          </h2>
          <div className="flex justify-center pb-16 md:justify-end">
            <Link
              href="/tienda"
              className="py-2 px-12 mb-2 bg-blue-500 rounded-md text-white uppercase font-semibold"
            >
              {" "}
              ⬅️ Ir a Tienda{" "}
            </Link>
          </div>
        </>
      )}
    </Layout>
  );
}
