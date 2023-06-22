import sendMessage from "../twilio/twilio-config"

export const createMessage = async(order,user) => {

    try {
        const message = `*Pedido*: ${order} de *${user}`
            sendMessage(message) 
    } catch (error) {
        console.log(error);
    }
    
}