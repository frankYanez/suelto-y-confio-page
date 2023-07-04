
import SectionImg from "../../Sections/SectionImg/SectionImg"
import './Home.styles.css'
import HeaderPrincipal from "../../Header/HeaderPrincipal"
import InfoCalidad from "../../InfoCalidad/InfoCalidad"
import CardSales from "../../CardSales/CardSales"



const Home = () => {
    const video = {
        url: '/assets/video-clean.mp4'
    }
    const calidadDescription = [
        {
            nombre: "Productos de marca y sueltos",
            img: "/assets/verificado-vid.mp4",
            descripcion: "Contamos con una amplia variedad de productos para la limpieza de tu hogar"
        },
        {
            nombre: "Calidad de atencion",
            img: "/assets/productos-vid.mp4",
            descripcion: "Siempre dispuesto a atender las solicitudes del cliente en nuestro local como tambien mediante nuestras redes sociales"
        },
        {
            nombre: "Envios a Domicilio",
            img: "/assets/envios-vid.mp4",
            descripcion: "Si no podes acercarte a nuestra sucursal, contactanos y te llevamos los productos a tu domicilio"
        }
    ]


    return (
        <div className="home">
            <HeaderPrincipal />
            <div className="">


                <section className=" xl:flex flex-row justify-center gap-8 my-24">
                    <div className="w-7/12 px-4 my-8 flex flex-col items-center gap-3">
                    <h2 className="title">Bienvenidos</h2>
                    <p className="text-justify" >Somos una empresa con mas de 10 años de experiencia en el rubro.
                        Enfocados en la satisfaccion de las necesidades de nuestros clientes que se encuentran en la busqueda de una gama de productos para el hogar. La atencion y calidad son nuestros fuertes a la hora de ofrecer nuestra .
                    </p>
                    <a href="/nosotros" className="button my-4">Conocenos</a>
                    
                    </div>
                    
                    <div className="w-96">
                        <img className="w-48" src="assets/img-bienvenida.jpg" alt="" />
                    </div>
                </section>


                <section className=" bg-teal-600 flex flex-col py-32">
                    <h3 className="title text-center">Productos de excelente calidad</h3>
                    <article className="flex flex-col justify-center  px-4 xl:flex-row my-24">
                        {
                            calidadDescription.map((item, i) => <InfoCalidad key={i} item={item} />)
                        }

                    </article>
                </section>

            </div>
            <h2 className="title text-center my-7">Ofertas Imperdibles</h2>
            <CardSales />

            <SectionImg />

            <section className="bg-teal-600">

            <img className="xl:w-10/12  mx-auto" src="/assets/pagos.png" alt="" />
            </section>
            <section className="flex items-center">
                <video loop autoPlay muted className="w-5/12 xl:w-4/12" src={video.url}></video>
                <div className="xl:flex flex-col items-center">
                <img className='w-12/12 xl:w-8/12' src="/assets/title.png" alt="" />
                <h3 className="xl:title xl:text-2xl text-center text-teal-600">Somos tu mejor opcion</h3>
                </div>
                
            </section>

           




        </div>
    )
}

export default Home