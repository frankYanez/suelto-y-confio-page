
import './SectionImg.styles.css'


const SectionImg = () => {
  
const infoCards = [
  {title: "Vents mayoristas", content: "aca va la informacion de cada uno de los items"},
  {title: "Vents minoristas", content: "aca va la informacion de cada uno de los items"},
  {title: "Vents", content: "aca va la informacion de cada uno de los items"}
  
]

    
  return (
    <div className='flex flex-col items-center xl:flex xl:flex-row justify-center  xl:gap-24 px-6 my-24'>
      <img className='w-48 xl:w-96' src="/assets/article-img.png" alt="" />
      <div className='w-11/12 flex flex-col gap-6 xl:flex xl:flex-col  justify-center xl:w-5/12'>
        <h3 className='title text-center'>Actitud a la hora de limpiar</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ipsum, laudantium consequatur quidem doloremque nisi nostrum perferendis dolor, eum cupiditate ut laborum corporis, fugiat molestias at nobis aperiam minima. Incidunt.</p>
        <div className='my-1 xl:my-6'>
          {
            infoCards.map( info => <div className='flex items-start my-6' key={info.title}>
              <img className='w-6 object-contain' src="assets/info-icon.png" alt="" /> 
              <div className='flex flex-col'>
              <h3 className='font-bold'>{info.title}</h3>

              <p>{info.content}</p>
              </div>
            </div>)
          }
        </div>
        
      </div>
       
        
    </div>
  )
}

export default SectionImg