
import SectionImg from "../../Sections/SectionImg/SectionImg"
import './Home.styles.css'
import HeaderPrincipal from "../../Header/HeaderPrincipal"
import InfoCalidad from "../../InfoCalidad/InfoCalidad"
import CardSales from "../../CardSales/CardSales"
import Rejillas from "../../Sections/SectionRejillas/Rejillas"
import SectionWelcome from "../../Sections/SectionWelcome/SectionWelcome"
import SectionCalidad from "../../Sections/SectionCalidad/SectionCalidad"
import ContactUs from "../../ContactUs/ContactUs"



const Home = () => {
    const video = {
        url: '/assets/video-clean.mp4'
    }



    return (
        <div className="home">
            <HeaderPrincipal />

            <SectionWelcome />

            <SectionCalidad />


            <Rejillas />
            <h2 className="title text-center mt-7">Ofertas Imperdibles</h2>
            <div className="w-6/12 h-0.5 bg-teal-400 mx-auto" />
            <CardSales />

            <SectionImg />

            <section className="">

                <img className="xl:w-10/12  mx-auto" src="/assets/pagos.png" alt="" />
            </section>
            <section className="flex flex-col my-12 items-center ">
                <video loop autoPlay muted className="w-7/12 xl:w-4/12" src={video.url}></video>
                <div className="xl:flex flex-col items-center">
                    <img className='w-10/12 mx-auto xl:w-8/12' src="/assets/title.png" alt="" />
                    <h3 className="text-2xl xl:title xl:text-2xl text-center text-teal-600">Somos tu mejor opcion</h3>
                </div>

            </section>

            <ContactUs />



        </div>
    )
}

export default Home