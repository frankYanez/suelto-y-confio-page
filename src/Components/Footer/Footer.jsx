
import './Footer.styles.css'
import Redes from '../Redes/Redes'



const Footer = () => {

const list = [['Relacion', 'Precio' , 'Calidad']]
  return (
    <footer className='flex gap-3 flex-col p-12 '>
      <h3 className='text-center'>Suelto y Confio</h3>
      <div className='flex flex-col justify-center gap-8 text-white'>
      <Redes/>

      
      {
        list.map( (li, i) => <div className='flex justify-center gap-4' key={i}>
          {
            li.map( (row,j) => <h4 key={j}>{row}</h4>)
          }
        </div> )
      }
    </div>

    </footer>
  )
}

export default Footer