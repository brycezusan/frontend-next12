
export default function Curso({ curso }) {
  const { title, content, image } = curso.attributes;
  const texto = content[0].children[0].text;
  const imagen = image.data.attributes.url
  return (
    <div style={{
      backgroundImage:`url(${imagen})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'

    }} className="bg-red-100 min-h-[30vh] my-10 text-center py-8 px-5 md:px-10 flex flex-col gap-10 md:flex-row justify-between items-center rounded">
      <p className="w-[30%] font-bold text-yellow-400 uppercase ">
        Ofertas Inalcazables <span className="font-black">30% Descuento</span>
      </p>
      <p className="w-[40%] line-clamp-3 md:line-clamp-none text-yellow-300">{texto}</p>
    </div>
  );
}
