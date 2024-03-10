import Image from "next/image";
import Layout from "../components/layout";
import NotFoundImage from "../public/img/404-2.webp";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="404 - Not Found">
      <h2 className="title">Error</h2>
      <div>
        <p className="text-center font-black mb-8 text-lg">
          Pagina no Encontrada
        </p>
        <div className="flex justify-end">
          <Link className="text-blue-700" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Image
        className="mx-auto"
        src={NotFoundImage}
        height={200}
        width={450}
        alt="not found image"
      />
    </Layout>
  );
}
