import Post from "./post";

export default function ListadoPosts({posts}) {
  return (
    <section className=' grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 py-12'>
        {
          posts.map(p=>(
            <Post key={p.id} post={p}/>
          ))
        }
      </section>
  )
}
