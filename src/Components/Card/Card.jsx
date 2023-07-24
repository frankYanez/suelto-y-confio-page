
import './Card.styles.css'
import { useEffect, useState } from 'react'
import Contador from '../ContadorBtn/Contador'
import { useCartContext } from '../../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CardProduct = (props) => {
    const { nombre, precio, categoria, img ,id} = props
    const [cantidad, setCantidad] = useState(1)

    const { addToCart } = useCartContext()

    const notify = () => toast('🛒 Producto Añadido', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    
    if (cantidad == 0) {
        setCantidad(1)
    }

    const product = {
        id,
        nombre,
        precio,
        categoria,
        img,
        cantidad : cantidad
    }

    
    


    return (
        <div className="card">
            <div className='flex flex-col justify-center  items-center'>
                <img className='w-3/5 max-h-48' src={img} alt="imagen del producto" />
                <div className='content'>
                    <h2>{nombre}</h2>
                    <h3>{precio}</h3>
                    <Contador cantidad={cantidad} setCantidad={setCantidad} categoria={categoria}/>
                    

                    <button onClick={() => {addToCart(product), notify()}} className='button'>Comprar</button>
                   
                </div>
            </div>
        </div>
    )
}

export default CardProduct