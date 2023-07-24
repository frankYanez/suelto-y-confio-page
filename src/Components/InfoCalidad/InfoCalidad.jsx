
import './InfoCalidad.styles.css'
import { useCartContext } from '../../context/CartContext';


const InfoCalidad = ({item, detalle, eliminar}) => {
  const { deleteProduct } = useCartContext()
 
  return (
    <div className='info bg-white '>
        <video className="w-20" loop autoPlay src={item.img} alt="" />
        <div className='info-content'>
            <h4 className='subtitle'>{item.nombre}</h4>
            { detalle ?<>  <p>{item.cantidad}</p> <button className={ eliminar && "button delete" } onClick={()=> deleteProduct(item.id)}>Eliminar</button> </> : <p>{item.descripcion}</p> }
        </div>

    </div>
  )
}

export default InfoCalidad