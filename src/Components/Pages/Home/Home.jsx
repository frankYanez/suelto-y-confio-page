
import SectionImg from "../../Sections/SectionImg/SectionImg"
import SectionVideo from "../../Sections/SectionVideo/SectionVideo"
import './Home.styles.css'
import HeaderPrincipal from "../../Header/HeaderPrincipal"
import InfoCalidad from "../../InfoCalidad/InfoCalidad"
import CardSales from "../../CardSales/CardSales"
import Slider from "react-slick";


const Home = () => {
  const calidadDescription =[
    {
      nombre: "Productos de marca y sueltos",
      img: "../src/assets/010-familiar.png",
      descripcion: "Contamos con una amplia variedad de productos para la limpieza de tu hogar"
    },
    {
      nombre: "Calidad de atencion",
      img: "../src/assets/trabaja.png",
      descripcion: "Siempre dispuesto a atender las solicitudes del cliente en nuestro local como tambien mediante nuestras redes sociales"
    },
    {
      nombre: "Envios a Domicilio",
      img: "../src/assets/entrega-urgente.png",
      descripcion: "Si no podes acercarte a nuestra sucursal, contactanos y te llevamos los productos a tu domicilio"
    }
  ]

  
  return (
    <div className="home">
      <HeaderPrincipal/>
        <div className="bg">
        

        <div className="contenedor-principal d-flex container ">
          <div className="section-welcome separation">
          <h2>Bienvenidos</h2>
          <p >Somos una empresa con mas de 10 años de experiencia en el rubro.
            Enfocados en la satisfaccion de las necesidades de nuestros clientes que se encuentran en la busqueda de una gama de productos para el hogar. La atencion y calidad son nuestros fuertes a la hora de ofrecer nuestra .
          </p>
          <button className="button separation">Conocenos</button>
          </div>
          
        <section className="d-flex section-info">
         {
           calidadDescription.map( (item, i) => <InfoCalidad key={i} item={item} />)
          }
        </section>
          </div>
          
         
          </div>
          <CardSales/>
          <SectionImg/>

         {/* <SectionVideo/> */}



          


    </div>
  )
}

export default Home