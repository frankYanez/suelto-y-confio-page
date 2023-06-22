

const sendMesagge = (text) => {
    const a = '"'
    let textFormar =  JSON.stringify(text);
     textFormar.replace(a, " ")

    const numeroTelefono = '+5492494517551'; // Número de teléfono al que deseas enviar el mensaje
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textFormar)}`;

    window.location.href = url;
}

export default sendMesagge;