

import './Header.style.css'


const HeaderPrincipal = () => {


  return (
    <header className='header-container'>

      {/* <img src='/assets/fondo.jpg' className='bg-video' /> */}
      <div className='hero'>

        <div className='header-content flex justify-center pt-24 lg:px-12'>
          <div className='flex flex-col items-center justify-center w-8/12 gap-4'>
            <h1 className='principal-title text-4xl xl:text-9xl'>Suelto y Confio</h1>
            <p className='font-bold xl:text-2xl'>Articulos de Limpieza</p>

          </div>


          <img  className='w-4/12 object-contain' src="/assets/hero.png" alt="" />
        </div>
      </div>





    </header>
  )
}

export default HeaderPrincipal