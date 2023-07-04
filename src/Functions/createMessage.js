
export const createMessage = (user, order) => {

    
    let orderString =  JSON.stringify(order);
    const texto = orderString.replace(/["'{}]/g, '')
    
    const text = `Hola mi nombre es ${user.name} y quiero un pedido a la direccion ${user.address} con: ${texto} `

    return text;
   
}