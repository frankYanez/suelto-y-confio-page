import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const obtenerFiltrados = async (valor)=>{
    try {
        let products = [];
        const queryCollection = collection(db, 'productos')
    const queryFilter = query(queryCollection, where('categoria' , '==' , `${valor}`))
     await getDocs(queryFilter)
     .then( data => products = data.docs.map( dat =>  ({id: dat.id ,...dat.data()})))
     return products;
    
    
    } catch (error) {
        console.log(error);
    }
    
}