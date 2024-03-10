import { GuitarraDetalle } from "../../components/guitarra-detalle";
import Layout from "../../components/layout";

// export async function getServerSideProps({query:params}) {
//   const {url} = params
//   const respuesta = await fetch(
//     `${process.env.API_url}/guitarras?filters[url]=${url}&populate=image`
//   );
//   const {data} = await respuesta.json();
//   return {
//     props: {
//       producto:data
//     },
//   };
// }

export async function getStaticProps({params}) {
  const {url} = params
  const respuesta = await fetch(
    `${process.env.API_url}/guitarras?filters[url]=${url}&populate=image`
  );
  const {data} = await respuesta.json();
  return {
    props: {
      producto:data
    },
  };
}

export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data} = await respuesta.json()

  const paths = data.map( d=>({
    params:{
      url:d.attributes.url
    }
  }))

  return{
    paths,
    fallback:false
  }
}

export default function GuitarraInfo({producto , agregarCarrito}) {
  const { name } = producto[0].attributes
  return (
    <Layout title={`${name}`}>
      <h2 className="title">Guitarra - {name}</h2>
      <GuitarraDetalle producto={producto} agregarCarrito={agregarCarrito}/>
    </Layout>
  );
}
