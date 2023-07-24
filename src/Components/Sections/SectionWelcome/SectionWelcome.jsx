

const SectionWelcome = () => {
  return (
    <section className="flex flex-col items-center my-5 xl:flex xl:flex-row justify-center gap-8 xl:my-24">
    <div className="w-10/12 xl:w-7/12 xl:px-4 my-8 flex flex-col items-center gap-3">
    <h2 className="title">Bienvenidos</h2>
    <p className="text-justify" >Somos una empresa con mas de 10 años de experiencia en el rubro.
        Enfocados en la satisfaccion de las necesidades de nuestros clientes que se encuentran en la busqueda de una gama de productos para el hogar. La atencion y calidad son nuestros fuertes a la hora de ofrecer nuestra .
    </p>
    <a href="/nosotros" className="button my-4">Conocenos</a>
    
    </div>
    
    <div className=" ">
        <video className="w-48 mx-auto shadowBox rounded-lg xl:w-96" controls   src="assets/vid-welcome.mp4" alt="video de ubicacion" />
    </div>
</section>

  )
}

export default SectionWelcome