import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import ListadoPosts from '../components/listadoPosts'

export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=image`)
  const {data} = await respuesta.json()

  return{
    props:{
      posts:data
    }
  }
}


export default function Blog({posts}) {
  return (
    <Layout
    title="Blog"
    description="Articulos MUSICALES , Temas Apropiados , Amo las guitarras"
  >
    <>
      <h2 className='title'>Blog</h2>

      <ListadoPosts  posts={posts}/>
    </>
  </Layout>
  )
}
