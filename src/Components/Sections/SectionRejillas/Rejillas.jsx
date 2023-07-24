import React from 'react'

const Rejillas = () => {
  return (
    <section className='flex flex-col-reverse items-center my-12 xl:flex'>
        <img className='w-48 xl:w-96' src="/assets/rejillas.png" alt="" />
        <aside className='text-center'>
            <h2 className='title'>Consulta por nuestras rejillas</h2>
            <p>Precios mayoristas y minoritas</p>

            <button className='button'>Comprar</button>
        </aside>
    </section>
  )
}

export default Rejillas