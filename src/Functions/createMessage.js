
export const createMessage = (user, order) => {
    
    
    let orderString = order.toString()
    // const compraFinal = orderString.replace(/["'[]{}]/g, '')


   

    // let arr = []
    // let compraFinal = order.map(item => {
    //     console.log(item)
    //     let string = item + ': ' + item + 'x'
    //     arr.push(string)
    // })

    // // arr.replace(',', ' ')
    // console.log(arr.toString())
    
    const text = `¡Hola!  Mi nombre es ${user.name} y quiero un pedido a la direccion ${user.address} con: ${orderString} \n Muchas Gracias!`

    return text;
   
}