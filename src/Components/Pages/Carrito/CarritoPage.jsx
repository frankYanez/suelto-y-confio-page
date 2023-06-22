import { useCartContext } from "../../../context/CartContext"
import InfoCalidad from "../../InfoCalidad/InfoCalidad"
import { Link } from "react-router-dom"


const CarritoPage = () => {
  const { cart, clearCart } = useCartContext()

  const sumarItems = ()=>{
    const resultado = cart.reduce((acc,item)=> acc + item.precio ,0);
    return resultado
  }

  const total = sumarItems()
  return (
    
        <section className="contenedor-carrito">
          
          {
            cart.length == 0 ? <h2>Tu carrito esta vacio</h2> : cart.map( item => <InfoCalidad key={item.id} eliminar detalle item={item}/>)
          }


             {
              cart.length == 0 ?<><Link to='/productos'> <button className="button">Agrega tus productos</button></Link> 
              </>
             :<>  <Link to='/form'><button className="button">Generar orden</button></Link> 
             <button className="button" onClick={()=> clearCart()}>Vaciar Carrito</button>
              </>
             }
            
            <div className="bg-slate-400">
              <h2 className="text-black">${total}</h2>
            </div>
              
          
        </section>
 
  )
}

export default CarritoPage