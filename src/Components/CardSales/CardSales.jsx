import './CardSale.styles.css'

const CardSales = () => {
    const sales = [
        {
            price: "$170 lt",
            name: "Lavandina",
            checks: [
                {
                    description: "Excelente calidad"
                },
                {
                    description: "Concentrada"
                },
                {
                    description: "Poder desinfectante"
                } 
            ]
        },
        {
            price: "$170 lt",
            name: "Desodorante",
            checks: [
                {
                    description: "Variedad en aromas"
                },
                {
                    description: "Gran duracion"
                },
                {
                    description: "Excelente Calidad"
                } 
            ]
        },
        {
            price: "$600 lt",
            name: "Quitasarro",
            checks: [
                {
                    description: "Accion inmediata"
                },
                {
                    description: "Larga duracion"
                },
                {
                    description: "Excelente calidad"
                } 
            ]
        }
    ]
  return (
    <div className='flex flex-col items-center xl:flex-row xl:justify-center my-14 bg-'>
        {
            sales.map( (sale, i) => 
                <div className="p-6 flex flex-col gap-6 items-center w-72 card " key={i}>
                    <h2 className="font-bold text-4xl ">{sale.price}</h2>
                    <h3>{sale.name}</h3>
                    <div className="" >
                    {sale.checks.map((check,i) =>

                        <p key={i} className="flex justify-start my-2"> <img className="w-4 object-contain" src="/src/assets/check.png" alt="" /> {check.description}</p>)}
                    </div>
                </div>

            )
        }
        
    </div>
  )
}

export default CardSales