
import './CardNosotros.styles.css'


const CardNosotros = ({lider}) => {
 
  return (
    <div className='my-12 text-center xl:mx-12  '>
      <div className='flex flex-col  items-center xl:flex xl:items-center'>
        <img className='rounded-full shadowBox   xl:w-48' src={lider.img} alt="" />
        <div>
        <h2 className='title '>{lider.nombre}</h2>
        <h3 className='bg-teal-400 '>{lider.cargo}</h3>
        </div>
      </div>
        <p>{lider.descripcion}</p>
    </div>
  )
}

export default CardNosotros