
import './InfoCalidad.styles.css'
import { useCartContext } from '../../context/CartContext';


const InfoCalidad = ({item, detalle, eliminar}) => {
  const { deleteProduct } = useCartContext()
 
  return (
    <div className='info'>
        <img className="info-img" src={item.img} alt="" />
        <div className='info-content'>
            <h2>{item.nombre}</h2>
            { detalle ?<>  <p>{item.count}</p> <button className={ eliminar && "button delete" } onClick={()=> deleteProduct(item.id)}>Eliminar</button> </> : <p>{item.descripcion}</p> }
        </div>

    </div>
  )
}

export default InfoCalidad