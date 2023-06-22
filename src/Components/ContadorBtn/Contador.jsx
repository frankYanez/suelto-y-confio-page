


const Contador = ({count , setCount, suelto }) => {
  return (
    <div className="flex justify-center my-2">
        <button className="mx-4  bg-emerald-400 px-2 rounded-lg" onClick={()=> setCount(count + 1)}>+</button>
        {
          suelto ? <p >Lts {count}</p> : <p className="w-4">{count}</p>
        }
            
           <button  className="mx-4  bg-emerald-400 px-2 rounded-lg" onClick={()=>setCount(count - 1)}>-</button>
    </div>
  )
}

export default Contador