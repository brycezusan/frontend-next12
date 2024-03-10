import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils"

export default function Post({post}) {
  const {title,createdAt , image , content , url} = post.attributes
  const imagen = image.data.attributes.url
  const contenido = content[0].children[0].text
  return (
    <div className="shadow bg-white rounded-md overflow-hidden">
      <Image 
        className="w-full object-cover"
        src={imagen}
        width={600}
        height={120}
        alt="image image"
        loading="lazy"
      />
      <section className="p-6 space-y-4">
        <h2 className="text-center text-xl font-bold text-yellow-500">{title}</h2>
        <small className="text-right block text-red-500">{formatearFecha(createdAt)}</small>
        <p className="line-clamp-4">{contenido}</p>
        <div className="flex justify-center pt-2">
        <Link className="btn" href={`/blog/${url}`}>Leer Más</Link>
        </div>
      </section>
    </div>
  )
}
