import InfoCalidad from '../../InfoCalidad/InfoCalidad'
import { calidadDescription } from '../../../Utils/calidadDescription'

const SectionCalidad = () => {

    return (
        <section className=" bg-teal-600 flex flex-col pt-12 pb-16 xl:py-32">
            <h3 className="title text-center">Productos de excelente calidad</h3>
            <div className="w-6/12 h-0.5 bg-teal-400 mx-auto" />
            <article className="flex flex-col my-9 justify-center gap-4  px-4 xl:flex-row xl:my-24">
                {
                    calidadDescription.map((item) => <InfoCalidad key={item.nombre} item={item} />)
                }

            </article>
        </section>
    )
}

export default SectionCalidad