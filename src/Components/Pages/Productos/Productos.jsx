import { useState } from "react";
import Listaproductos from "../../ListaProductos/Listaproductos"
import SelectSmall from "../../Select/Select"
import './Productos.styles.css'

const ProductosPage = () => {

  const [categoria, setCategoria] = useState('todos');

  console.log('render page');
  return (
    <div className="text-center" >
      
      <h2 className="title text-center">Selecciona tus productos</h2>
      
      <SelectSmall  categoria={categoria} setCategoria={setCategoria} />
      
      <Listaproductos value={categoria} />
    </div>
  )
}

export default ProductosPage