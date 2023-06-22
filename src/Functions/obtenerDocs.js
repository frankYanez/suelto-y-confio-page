import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"


const obtenerDocs = async ()=>{
    try {
        const queryCollection = collection(db, 'productos')
        const docusCifrados = await getDocs(queryCollection)
        const docus = docusCifrados.docs.map( doc => {
            
            console.log(doc.id);
                return doc.id
                
            
    })
    } catch (error) {
        console.log(error);
    }
    
    
}

export default obtenerDocs

