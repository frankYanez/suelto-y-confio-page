import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination, Navigation, Autoplay } from 'swiper'


const Carousel = () => {
  return (
    <div className='flex justify-center'>

  
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1.5
        
    }}
    autoplay={{
        delay: 4000,
        stopOnLastSlide: false
        // disableOnInteraction: true,
        // reverseDirection: true
    }}
    spaceBetween={50}
    navigation={{
        nextEl: '.swiper-button-next'
    }}
    pagination={{el: '.pagination', clickable: true}}
    modules={[EffectCoverflow, Pagination,Navigation, Autoplay]}
    className='text-center'
    >
        <SwiperSlide>
            <img className='mx-auto' src="/assets/006-desinfectante.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='mx-auto' src="/public/assets/001-lavadora.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='mx-auto' src="/assets/006-desinfectante.png" alt="" />
        </SwiperSlide>
        <div className='swiper-pagination'></div>
    </Swiper>
    </div>
  )
}

export default Carousel