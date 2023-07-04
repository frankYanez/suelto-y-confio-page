import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"


const obtenerDocs = async ()=>{
    try {
        let products = [];
            const queryCollection = collection(db, 'productos')
            await getDocs(queryCollection)
            .then(d => products =  d.docs.map(doc =>({id: doc.id,  ...doc.data()})))
            .catch( err => console.log(err))  
            return products;
    }
     catch (error) {
        console.log(error);
    }
    
    
}

export default obtenerDocs

