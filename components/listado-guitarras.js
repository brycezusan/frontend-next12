import Guitarra from "./guitarra";


export default function ListadoGuitarras({guitarras}) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-12">
      {
        guitarras.map(guitar=>(
          <Guitarra key={guitar.id} guitar={guitar}/>
        ))
      }
    </section>
  )
}
