
import './Card.styles.css'
import {  useState } from 'react'
import Contador from '../ContadorBtn/Contador'
import {  useCartContext } from '../../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CardProduct = ({producto}) => {
  const [count , setCount] = useState(1)
  
  const { addToCart } = useCartContext()

  const notify = ()=> toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  if (count == 0) {
    setCount(1)
  }

  
  
  return (
    <div className="card">
      <div className='flex flex-col justify-center  items-center'>
        
        <img className='w-3/5 max-h-48' src={producto.img} alt="" />

       

        <div className='content'>

      <h2>{producto.nombre}</h2>
      <h3>{producto.precio}</h3>
      {
        producto.categoria == "suelto" ? <Contador suelto count={count} setCount={setCount}/> : <Contador count={count} setCount={setCount}/>
      }
      
      <button  onClick={()=>{ 
         addToCart( {cantidad: count, ...producto} ) } }className='button'>Comprar</button>
      <ToastContainer 
            position="top-right"
            autoClose={4000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark" />
       </div>
      </div>
      
    </div>
  )
}

export default CardProduct