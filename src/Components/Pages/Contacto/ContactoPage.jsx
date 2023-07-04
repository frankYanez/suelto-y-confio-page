
import Redes from '../../Redes/Redes'



const ContactoPage = () => {
  const urlMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.1481919873763!2d-59.12303163039595!3d-37.32847289825632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911fc1e425e727%3A0x9ae1a7bdb052922e!2sConstituci%C3%B3n%201309%2C%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1684247368101!5m2!1ses-419!2sar"
  return (
    <div className='flex justify-center'>
        

       
        <section className='flex justify-center'>
            <img className='xl:w-3/12 ' src="/assets/syc-local1.JPG" alt="" />
            <aside className='xl:w-6/12 flex flex-col justify-center items-center gap-12'>
            <h2 className='title'>Contactanos</h2>
            <Redes/>
        <iframe className='w-9/12 shadow-2xl mx-auto rounded-full xl:w-96' src={urlMap} width="400" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </aside>
        </section>
        
       
    </div>
  )
}

export default ContactoPage