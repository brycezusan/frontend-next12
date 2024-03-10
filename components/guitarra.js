import { formatearMoneda } from "../utils";
import Link from "next/link";
import Image from "next/image";

export default function Guitarra({ guitar }) {
  const { description, name, price, url, image } = guitar.attributes;
  const imagen = image?.data?.attributes?.formats?.small?.url;
  const desc = description[0]?.children[0].text;

  if (imagen === undefined) return null;

  return (
    <article className="p-6 grid grid-cols-2 items-center bg-white shadow rounded-md">
      <Image
        className="guitarra mx-auto block"
        src={imagen}
        height={60}
        width={120}
        loading="lazy"
        alt={`imagen de guitarra-${name}`}
      />
      <section className="text-center space-y-4">
        <h2 className=" text-orange-400 font-bold text-xl">{name}</h2>
        <p className="text-slate-950 font-semibold">{formatearMoneda(price)}</p>
        <p className="line-clamp-3">{desc}</p>

        <div className="pt-4">
          <Link className="btn" href={`/guitarras/${url}`}>
            Ver mas
          </Link>
        </div>
      </section>
    </article>
  );
}
