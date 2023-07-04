import { createContext, useContext, useEffect, useState } from "react";

//Creamos el contexto
const CartContext = createContext([])

//exportamos una funcion que ejecute el contexto creado arriba
export const useCartContext = () => useContext(CartContext)

//Este es el COMPONENTE que recibe children que sera todo lo que envuelva
const CartcontextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (producto) => {

    const find = cart.find(ele => ele.id == producto.id)

    if (find) {

      const updateCart = cart.map(item => {

        if (item.id == producto.id) {
          return {
            ...item, cantidad: item.cantidad + producto.cantidad
          }
        } else {
          return item
        }
      })

      setCart(updateCart)
    } else {
      setCart([...cart, producto])
    }
  }



  const deleteProduct = (id) => {
    const updateCart = cart.filter(item => item.id != id)

    setCart(updateCart);
  }

  const clearCart = () => {
    setCart([])
  }
  return (

    <CartContext.Provider value={{
      addToCart,
      deleteProduct,
      clearCart,
      setCart,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartcontextProvider


// Zc_ApgWQ4kvOHXlmJD07smmaKWZsj5mvEdFzLEPb