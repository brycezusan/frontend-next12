import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "../utils";
import clsx from "clsx";
import styles from "../styles/header.module.css";

function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className="container mx-auto lg:flex md:items-center lg:justify-between">
        <Image
          className="block max-w-xl logo"
          src="/img/logo.svg"
          alt="Logo GuitarLa"
          width={600}
          height={80}
          priority="true"
        />

        <nav className="flex gap-5 text-xl justify-center mt-10 lg:mt-0 text-white">
          {LINKS?.map((link) => (
            <Link
              className={clsx("font-semibold", {
                "text-orange-500 ": pathname === link.ref,
              })}
              href={link.ref}
              key={link.id}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href='/cart' 
            className={clsx({
              "text-blue-600": pathname === '/cart'
            })} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
