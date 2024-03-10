import Curso from "../components/curso";
import Layout from "../components/layout";
import ListadoGuitarras from "../components/listado-guitarras";
import ListadoPosts from "../components/listadoPosts";

export async function getServerSideProps() {
  const urlGuitarra = `${process.env.API_URL}/guitarras?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCurso =  `${process.env.API_URL}/curso?populate=image`;

  const [resGuitarras, resPosts , resCurso] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);
  const [{ data: guitarras }, { data: posts } , {data:curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ]);


  return {
    props: {
      guitarras,
      posts,
      curso
    },
  };
}

export default function Home({ guitarras , posts  , curso}) {
  return (
    <Layout title="Inicio" description="Blog,Venta de Guitarras,Musica es Arte">
      <h2 className="title">Bienvenido a GuitarLa</h2>

      <ListadoGuitarras guitarras={guitarras} />

      <Curso curso={curso}/>

      <ListadoPosts posts={posts}/>
    </Layout>
  );
}
