import { Link } from "react-router-dom";
import './Navbar.style.css'
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";


const Navbar = () => {
  const { cart} = useCartContext()
  const count = cart?.length
  const [hamburger, setHamburger] = useState(false)

  const handleState = () => {
    setHamburger(!hamburger)
  }
 
  return (
   <nav className="navbar flex justify-between px-8 ">
    <h2 className="principal-title p-3 text-2xl text-white">
      SyC
    </h2>
    
    <section className="flex justify-end gap-10">
    <div className={ hamburger ? 'links  active' : 'links xl:gap-10'} >
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
    </div>
    <div onClick={handleState} className="hamburger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      
    </div>
    </section>
    
        <Link className="container-cart" to="/carrito"><img className="icon-cart" src="/assets/carrito-icono.png" alt="icon-cart" />({count})</Link> 
        
    
   </nav>
      
     

       
  )
}

export default Navbar

{/* */}