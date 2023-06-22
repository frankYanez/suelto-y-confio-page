
import twilio from "twilio";



const  ACC_ID = "AC5a9678258d3aef02ce73e112e42f2375"
const ACC_SK = "11872e0904985d7db7c226ce6251270f"
const MY_PHONE = 'whatsapp:+5492494517551'
const client = twilio(ACC_ID,ACC_SK);
client.messages 
      .create({   
        from: 'whatsapp:+14155238886',
        body: "Hola",      
         to: MY_PHONE 
       }) 
      .then(message => console.log(message.sid)) 
    

 
