import { Link } from 'react-router-dom'
import './Redes.styles.css'

const Redes = () => {
    const redes = [
        {
            link: 'https://www.facebook.com/profile.php?id=100065259391616',
            logo: "../../src/assets/logo-facebook.png",
            nombre: 'Facebook'
        },
        {
            link: 'https://www.facebook.com/profile.php?id=100065259391616',
            logo: "../../../src/assets/logo-instagram.png",
            nombre: 'Instagram'
        },
        {
            link: 'https://www.facebook.com/profile.php?id=100065259391616',
            logo: "../../../src/assets/logo-whatsapp.png",
            nombre: 'WhatsApp'
        }
    ]
  return (
    <div className='flex justify-center gap-6 mx-0' >

       {
        redes.map( red => <Link to={red.link} className='d-flex link' key={red.nombre}>
            <img className='logo-red' src={red.logo} alt=''/>
            <h4>{red.nombre}</h4>
        </Link>)
       }
        {/* {
            redes.map( red => {
                <Link to={red.link} className='d-flex'>
                <img className='logo-red' src={red.logo} alt="" />
                <h4>{red.nombre}</h4>
                </Link>
            })
        } */}
                
            </div>
  )
}

export default Redes