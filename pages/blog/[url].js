import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../../utils";

export async function getServerSideProps({ query: params }) {
  const { url } = params;
  const respuesta = await fetch(
    `${process.env.API_url}/posts?filters[url]=${url}&populate=image`
  );
  const { data } = await respuesta.json();
  return {
    props: {
      post: data,
    },
  };
}

export default function BlogInfo({ post }) {
  const { image, content, title, createdAt } = post[0].attributes;

  const imagen = image.data.attributes.url;
  const texto = content[0].children[0].text;

  return (
    <Layout title="Blog Info">
      <h2 className="title">{title}</h2>
      <section className="max-w-[1024px] mx-auto py-16  grid gap-6 lg:grid-cols-2 lg:gap-10 lg:items-center">
        <Image
          src={imagen}
          alt="image image-post"
          width={600}
          height={200}
          loading="lazy"
          className="block mx-auto"
        />
        <section className="space-y-5">
          <div className="flex justify-end">
            <Link href="/blog" className="text-blue-600">
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
          <p>{texto}</p>
          <p className="block text-right font-bold text-red-500">{formatearFecha(createdAt)}</p>
        </section>
      </section>
    </Layout>
  );
}
