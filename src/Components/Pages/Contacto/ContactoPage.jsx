
import Redes from '../../Redes/Redes'
import './ContactoPage.styles.css'



const ContactoPage = () => {
  return (
    <div>
        

       
        <section className='contenedor-contacto  d-flex'>
            <img className='img-side' src="public/assets/syc-local1.JPG" alt="" />
            <Redes/>
        </section>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.1481919873763!2d-59.12303163039595!3d-37.32847289825632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911fc1e425e727%3A0x9ae1a7bdb052922e!2sConstituci%C3%B3n%201309%2C%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1684247368101!5m2!1ses-419!2sar" width="400" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       
    </div>
  )
}

export default ContactoPage