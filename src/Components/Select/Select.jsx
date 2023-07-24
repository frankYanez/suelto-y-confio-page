
export default function SelectCategoria({categoria, setCategoria}) {
  

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    
    <select className="mx-auto my-12 w-12/12 text-center p-4 text-2xl" value={categoria} onChange={handleChange} name="" id="">
      <option value="todos">Todos</option>
      <option value="suelto">Suelto</option>
      <option value="Marca">Marca</option>
      <option value="anexos">Anexos</option>
    </select>
  );
}