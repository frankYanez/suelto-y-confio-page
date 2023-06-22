
import './CardNosotros.styles.css'


const CardNosotros = ({lider}) => {
 
  return (
    <div className='my-12 lg:mx-12 '>
      <div className='flex items-center'>
        <img className='rounded-full' src={lider.img} alt="" />
        <div>
        <h2 className='title'>{lider.nombre}</h2>
        <h3>{lider.cargo}</h3>
        </div>
      </div>
        <p>{lider.descripcion}</p>
    </div>
  )
}

export default CardNosotros