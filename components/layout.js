import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children , title  = '', description = '' }) {

  return (
    <div>
      <Head>
        <title>{`GuitarLa-${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="container py-12 w-11/12  md:w-5/6 lg:w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
