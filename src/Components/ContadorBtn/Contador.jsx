
const Contador = ({ cantidad, setCantidad, categoria}) => {

  const ContadorSuelto = () => {

    const handleChangeCantidad = (e) => {
      setCantidad(e.target.value)
      console.log(typeof e.target.value);
    }
    return (
      <select value={cantidad} onChange={handleChangeCantidad} name="litros" id="">
        <option value={1}>1 lts</option>
        <option value={1.5}>1.5 lts</option>
        <option value={2}>2 lts</option>
        <option value={3}>3 lts</option>
        <option value={5}>5 lts</option>
      </select>
    )
  }

  return (
    <div className="flex justify-center my-2">

      {
        categoria == "suelto" ? <ContadorSuelto cantidad={cantidad}/> : <> <button className="mx-4  bg-emerald-400 px-2 rounded-lg" onClick={() => setCantidad(cantidad + 1)}>+</button>
        <p className="w-4">{cantidad}</p>
        <button className="mx-4  bg-emerald-400 px-2 rounded-lg" onClick={() => setCantidad(cantidad - 1)}>-</button>
        </> 
       }
     



    </div>
  )
}

export default Contador