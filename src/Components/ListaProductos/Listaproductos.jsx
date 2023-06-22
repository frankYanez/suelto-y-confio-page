import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import './Listaproductos.styles.css'
import { db } from "../../firebase/config"
import Loading from "../Loading/Loading"
import CardProduct from "../Card/Card"




const Listaproductos = ({value}) => {
  
  const [productos , setProductos] = useState([])
  const [ loading , setLoading] = useState(true)

 useEffect(()=>{
  
  if (value == 'todos'){
    getAllProducts()
  }else{
    productsQuery(value)
  }
 },[value])

const productsQuery = async (valor)=> {
  const queryCollection = collection(db, 'productos')
  const queryFilter = query(queryCollection, where('categoria' , '==' , `${valor}`))

  await getDocs(queryFilter)
  .then( data => setProductos(data.docs.map( doc => ({id: doc.id, ...doc.data()}))))
  .catch( err => console.log(err))
  .finally(setLoading(false))
}
 const getAllProducts = async ()=>{
  const queryCollection = collection(db, 'productos')
  await getDocs(queryCollection)
  .then(d => setProductos( d.docs.map(doc =>({id: doc.id,  ...doc.data()}))))
  .catch( err => console.log(err))
  .finally( setLoading(false))
 }


  return (
    <>
      
        <div className="contenedor-cards d-flex">
      {
          loading ? <Loading/> :
          productos.map( prod => <CardProduct key={prod.id} producto={prod} />)
        }

        </div>
      
       
    </>
  )
}

export default Listaproductos