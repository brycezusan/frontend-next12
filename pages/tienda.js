import Layout from "../components/layout";
import ListadoGuitarras from "../components/listado-guitarras";

// export async function getStaticProps(){
//   const url=`${process.env.API_URL}/guitarras?populate=image`
//   const respuesta = await fetch(url)
//   const {data:guitarras} = await respuesta.json()

//   return {
//     props:{
//       guitarras
//     }
//   }
// }


export async function getServerSideProps(){
  const url=`${process.env.API_URL}/guitarras?populate=image`
  const respuesta = await fetch(url)
  const {data:guitarras} = await respuesta.json()
  return {
    props:{
      guitarras
    }
  }
}


export default function Tienda({guitarras}) {
  return (
    <Layout
      title="Tienda"
      description="Tienda,Las mejores guitarras,los mejores articulos"
    >
      <>
        <h2 className="title">Nuestra Colleción</h2>

        <ListadoGuitarras 
          guitarras={guitarras}
        />
      
      </>
    </Layout>
  );
}



