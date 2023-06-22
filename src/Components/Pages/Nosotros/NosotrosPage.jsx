
import CardNosotros from "../../CardNosotros/CardNosotros"
import './NosotrosPage.styles.css'


const NosotrosPage = () => {

    const lideres = [{
        nombre: 'Lucia',
        cargo: 'Lider de Ventas',
        descripcion: 'Mi nombre es Lucia, encargada de la parte de ventas del local desde hace mas de 4 años. Responsable de los envios diarios que nos llegan a traves de nuestras redes. Desde que me uni a esta empresa familiar',
        img:'https://randomuser.me/api/portraits/women/87.jpg'
      },
      {
        nombre: 'Valeria',
        cargo: 'Lider y CEO',
        descripcion: 'Mi nombre es Valeria, fundadora de este maravilloso lugar hace mas de 10 años. Hoy, encargada de la atencion al publico en nuestra sucursal y de la adquisicion de nuevos proveedores para la satisfaccion de nuestros clientes con productos de calidad',
        img: 'https://randomuser.me/api/portraits/women/76.jpg'
      }
    ]
  return (
    <div className="nosotros" >
        
          <section className="flex flex-col items-center justify-center mx-auto my-10 text-justify w-9/12">

          <aside>
            <h2 className="title text-center">Quienes Somos</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat non accusamus et eaque veritatis sequi pariatur impedit optio, dicta eius quasi quae expedita. Nihil consectetur ab, cumque sed et sequi.
              Impedit laboriosam sunt asperiores repellendus aliquid facere minus enim tempora quo, reprehenderit voluptatibus exercitationem veritatis. Recusandae itaque libero mollitia voluptatum illum, architecto veritatis fuga beatae. Iusto magnam earum doloremque sint!
              Accusamus commodi exercitationem quae quaerat voluptatibus ratione repudiandae adipisci alias aperiam, ipsam quam nihil odit expedita fuga quas voluptate at dolorem quidem quibusdam, aliquam similique asperiores tenetur! Officiis, accusantium magnam!
              Magni voluptatibus, repellat consequuntur soluta ea dignissimos ducimus excepturi totam dolorum, quas optio quo nisi sequi facere temporibus illo mollitia maxime, iure quasi? Nisi minima accusamus atque aut itaque. Nam!
              Dolore veniam laudantium est voluptatum quaerat ullam necessitatibus beatae unde temporibus cupiditate, aperiam sint quisquam obcaecati error iste maxime reiciendis consequuntur non animi accusamus ad pariatur voluptate? Consequatur, culpa praesentium.
            </p>
            
          </aside>
         
         <h1 className="text-5xl my-40"> <span className="text-emerald-400 font-extrabold italic w-96">"</span> Soltá y Confiá en nosotras<span className="text-emerald-400 w-96 font-extrabold italic">"</span></h1>
          </section>
            <article className="w-9/12 mx-auto lg:flex">
        {
            lideres.map(lider => <CardNosotros key={lider.nombre} lider={lider}/>)
        }
         </article>
       
       
    </div>
  )
}

export default NosotrosPage