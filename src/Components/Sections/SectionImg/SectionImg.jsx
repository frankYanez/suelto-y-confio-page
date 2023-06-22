
import './SectionImg.styles.css'


const SectionImg = () => {
const infoCards = [
  {urlImg: "../../src/assets/card-img1.png"},
  {urlImg: "../../src/assets/card-img2.jpg"},
  {urlImg: "../../src/assets/card-img2.jpg" }
]

    
  return (
    <div className='flex justify-center my-14'>
      
       <img className='w-8/12' src="public/assets/nuestros-productos.png" alt="" />
        
    </div>
  )
}

export default SectionImg