
import { useState } from 'react'
import './Form.styles.css'
import { useCartContext } from '../../context/CartContext'
import sendMesagge from '../../Functions/SendMesagge'


const Form = () => {
  const {cart}= useCartContext()
    const [ name , setName ] = useState('')
    const [ address , setAddres ] = useState('')
    const [ phone , setPhone ] = useState('')
    // const [ errors , setErrors] = useState({
    //     name: {
    //         error : false,
    //         mesegge: 'Al menos 3 caracteres'
    //     }
    // })

    
    const handleChange = (e) => {
      e.preventDefault()
       const user = {
        name,
        address,
        phone,
       }

       console.log(user);
       console.log(cart);
       const pedido ={ ...user, ...cart}
       sendMesagge(pedido)

       

    }
    
    // const validarNombre = (nombre) => {
    //  console.log(errors.name.error);   
    //     if( nombre.length < 3){
    //         return { name: {error: true , mesegge : 'putito'}}
    //     }else{
    //         return { name: {error: false , mesegge : ''}}
    //     }
 
    // }
 
    
    
  return (
    <form onSubmit={handleChange} className="form mx-auto py-24">
    <p className="titleForm mx-auto">Pedido</p>
    <p className="message">Tu pedido sera confirmado a la brevedad</p>
        
        <label>
            <input required  onChange={(e)=>setName(e.target.value)} value={name} type="text" className="input"/>
            <span>Nombre</span>
        </label>  
            
    <label>
        <input required onChange={(e)=>setAddres(e.target.value)} value={address} type="text" className="input"/>
        <span>Direccion</span>
    </label> 
        
    <label>
        <input onChange={(e)=>setPhone(e.target.value)} value={phone}   type="number" className="input"/>
        <span>Telefono</span>
    </label>
    
    <button type='submit' className="button my-8">Realizar Pedido</button>
   
</form>
  )
}


export default Form;
