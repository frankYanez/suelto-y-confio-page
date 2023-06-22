import { useState } from "react";
import Listaproductos from "../../ListaProductos/Listaproductos"
import SelectSmall from "../../Select/Select"
import './Productos.styles.css'

const ProductosPage = () => {

  const [categoria, setCategoria] = useState('todos');

  // console.log(categoria);
  // const getProductos = ()=>{ refresh()
  // }

  // const productos = getProductos()
  return (
    <div >
      <div className="h-12 my-2 bg-slate-950">

      </div>
      <h2 className="title text-center">Selecciona tus productos</h2>
      <div  className="w-6/12 my-4 mx-auto">
      <SelectSmall  categoria={categoria} setCategoria={setCategoria} />
      </div>
      <Listaproductos value={categoria} />
    </div>
  )
}

export default ProductosPage