
import './Footer.styles.css'
import Redes from '../Redes/Redes'



const Footer = () => {

  const list = [['Relacion', '', '']]
  return (
    <footer className='flex gap-3 flex-col p-12 '>
      <h3 className='stroke text-4xl principal-title text-white'>Suelto y Confio</h3>
      <p>Articulos de limpieza</p>
      <div className='flex flex-col justify-center gap-8 text-white'>

        <div className='flex items-center'>
          <img className='w-1/12' src="/assets/argentina.png" alt="" />
          <p>Tandil, Argentina</p>
        </div>

        <div>
          <h4 className='text-emerald-400 text-2xl font-bold' >Nuestra mision</h4>
          <ul>
            <li>Relacion</li>
            <li>Precio</li>
            <li>Calidad</li>
          </ul>
        </div>

        <div>
          <h4 className='text-emerald-400 text-2xl font-bold'>Siguenos</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
        </div>


      </div>
      <hr />
      <p className='text-center font-extralight'>Created By @Frank Yanez Developer</p>

    </footer>
  )
}

export default Footer