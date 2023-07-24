
import { useState } from 'react'
import './Form.styles.css'
import { useCartContext } from '../../context/CartContext'
import sendMesagge from '../../Functions/SendMesagge'


const Form = () => {
  const {cart}= useCartContext()
    const [ name , setName ] = useState('')
    const [ address , setAddres ] = useState('')
    const [ phone , setPhone ] = useState('')
  
    
    const handleChange = (e) => {
      e.preventDefault()
      const pedido = []
       const user = {
        name,
        address,
        phone,
       }

       cart.map( item => {
        const obj = `${item.nombre}: ${item.cantidad} x`
        pedido.push(obj)
       })
       sendMesagge(user,pedido)

       

    }
    
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
        <input onChange={(e)=>setPhone(e.target.value)} value={phone}   type="tel" className="input"/>
        <span>Telefono</span>
    </label>
    
    <button type='submit' className="button my-8">Realizar Pedido</button>
   
</form>
  )
}


export default Form;
