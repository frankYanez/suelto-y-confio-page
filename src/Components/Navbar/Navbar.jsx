import { Link } from "react-router-dom";
import './Navbar.style.css'
import { useCartContext } from "../../context/CartContext";


const Navbar = () => {
  const { cart} = useCartContext()
  const count = cart.length
 
  return (
   <nav className="navbar">
    <h2 className="p-3 font-bold text-white">
      SyC
    </h2>
    <div className="hamburger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      
    </div>
    
    <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
    </div>
        
        <Link className="container-cart" to="/carrito"><img className="icon-cart" src="public/assets/carrito-icono.png" alt="icon-cart" />({count})</Link> 
   </nav>
      
     

       
  )
}

export default Navbar

{/* */}