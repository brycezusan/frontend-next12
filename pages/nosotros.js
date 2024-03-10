import Image from "next/image";
import Layout from "../components/layout";
import NosotrosImage from "../public/img/nosotros.jpg"

export default function Nosotros() {
  return (
    <Layout
      title="Nosotros"
      description="Sobre Nosotros,GuitarLa , articulos MUSICALES"
    >
     <>
      <h2 className="title">Nosotros</h2>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center py-12">
          <Image src={NosotrosImage} loading="lazy" className="mx-auto block nosotros-img" width={600} height={120} alt="image ima-nosotros" />
          <section className="space-y-4 text-justify">
            <p>
              ¡Bienvenidos a nuestra tienda de guitarras! Somos un equipo
              apasionado por la música y nos dedicamos a ofrecer una amplia
              selección de guitarras de alta calidad para músicos de todos los
              niveles. Nuestro objetivo es brindar a nuestros clientes una
              experiencia excepcional al adquirir y explorar el mundo de las
              guitarras.
            </p>
            <p>
              Nos enorgullece ofrecer una cuidadosa selección de guitarras de
              marcas reconocidas y confiables. Trabajamos directamente con
              fabricantes y proveedores de renombre para garantizar que cada
              guitarra que vendemos cumpla con nuestros estándares de calidad.
              Ya sea que busques una guitarra acústica, eléctrica, clásica o de
              otro tipo, encontrarás una amplia variedad de opciones en nuestro
              catálogo.
            </p>
          </section>
        </div>
     </> 
    </Layout>
  );
}
