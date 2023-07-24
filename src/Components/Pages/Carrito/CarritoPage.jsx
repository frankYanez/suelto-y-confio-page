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
    
        <section className="py-12">
          <h2 className="title text-center">Tu carrito</h2>
          <div className="flex justify-center py-12">
          {
            cart && cart?.length == 0 ? <h2>Tu carrito esta vacio</h2> : cart.map( item => <InfoCalidad key={item.id} eliminar detalle item={item}/>)
          }
          </div>
         


             {
              <div className="flex justify-center py-12">
                {
                  cart.length == 0 ?<Link to='/productos'> <button className="button">Agrega tus productos</button></Link> 
              
                  : <> <Link to='/form'><button className="button">Generar orden</button></Link>
                  <button className="button" onClick={clearCart}>Vaciar Carrito</button>
                  </>
                }
              </div>
              
             }
            
            <div className="bg-emerald-400">
              <h2 className="text-black">${total}</h2>
            </div>
              
          
        </section>
 
  )
}

export default CarritoPage