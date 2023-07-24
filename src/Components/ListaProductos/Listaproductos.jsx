import { useEffect, useState } from "react"
import './Listaproductos.styles.css'
import Loading from "../Loading/Loading"
import CardProduct from "../Card/Card"
import obtenerDocs from "../../Functions/obtenerDocs"
import { obtenerFiltrados } from "../../Functions/obtenerFiltrados"




const Listaproductos = ({value}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    

    //TODO: paginacion
    
    useEffect(() => {

        if (value == 'todos') {
            obtenerDocs()
                .then(data => setProductos(data))
                .finally(setLoading(false))

            } else {
            obtenerFiltrados(value)
            .then(data => setProductos(data))
        }
    }, [value])
    
    
    return (
        <>

            <div className="contenedor-cards d-flex">
                {
                    
                    loading ? <Loading /> :
                        productos.map(prod => <CardProduct key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} categoria={prod.categoria} img={prod.img} />)
                }
            </div>


        </>
    )
}


export default Listaproductos