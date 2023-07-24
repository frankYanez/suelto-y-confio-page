import { createMessage } from "./createMessage";


const sendMesagge = (user,cart) => {
    
   
   const text = createMessage(user,cart)
   


    const numeroTelefono = '+5492494517551'; // Número de teléfono al que deseas enviar el mensaje
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(text)}`;

    window.location.href = url;
}

export default sendMesagge;