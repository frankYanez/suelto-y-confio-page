import { Link } from 'react-router-dom'
import './Redes.styles.css'

const Redes = () => {
    const redes = [
        {
            link: 'https://www.facebook.com/profile.php?id=100065259391616',
            logo: "/assets/logo-facebook.png",
            nombre: 'Facebook'
        },
        {
            link: 'https://www.facebook.com/profile.php?id=100065259391616',
            logo: "/assets/logo-instagram.png",
            nombre: 'Instagram'
        },
        {
            link: 'https://www.facebook.com/profile.php?id=100065259391616',
            logo: "/assets/logo-whatsapp.png",
            nombre: 'WhatsApp'
        }
    ]
    return (
        <div className='flex justify-center gap-6 mx-0' >

            {
                redes.map(red => <Link to={red.link} className='xl:flex xl:gap-1' key={red.nombre}>
                    <img className='w-3/12 xl:w-6 ' src={red.logo} alt='' />
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