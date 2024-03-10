import Link from "next/link"
import {LINKS} from "../utils/index"
import clsx from "clsx"
import {usePathname} from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer className="text-lg py-8 bg-gradient-to-r from-slate-800/90 to-slate-950/90">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse lg:justify-between gap-10 items-center">
        <p className="text-gray-200 antialiased">Todos los Derechos Reservado ❤️ {new Date().getFullYear()}</p>
        <nav className="flex gap-5  justify-center mt-10 lg:mt-0 text-white">
        {
          LINKS.map( link=>(
          <Link className={clsx(
              'font-bold px-2 ',
              {
                'bg-gray-100 text-orange-400 rounded-lg': pathname === link.ref,
              }
            )}
           href={link.ref} key={link.id}>{link.name}</Link>

          ))
        }
         
        </nav>
      </div>
    </footer>
  )
}
