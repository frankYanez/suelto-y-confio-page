
export default function SelectCategoria({categoria, setCategoria}) {
  

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    
    <select className="mx-auto w-60" value={categoria} onChange={handleChange} name="" id="">
      <option value="todos">Todos</option>
      <option value="suelto">Suelto</option>
      <option value="suelto">Marca</option>
      <option value="suelto">Anexos</option>
    </select>
  );
}