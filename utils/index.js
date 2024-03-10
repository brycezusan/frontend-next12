export const LINKS = [
  {id:1 , ref:'/', name:'Inicio'},
  {id:2 , ref:'/nosotros', name:'Nosotros'},
  {id:3 , ref:'/tienda', name:'Tienda'},
  {id:4 , ref:'/blog', name:'Blog'}
]


export const formatearMoneda = moneda =>{
  return moneda.toLocaleString('en-US',{
    style:'currency',
    currency:'USD'
  })
}

export const formatearFecha = fecha=>{
  const newDate = new Date(fecha)
  const options={
    year:'numeric',
    month:'long',
    day:'numeric'
  }
  return newDate.toLocaleDateString('es-PE',options)


}