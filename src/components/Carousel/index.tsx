// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// Import Swiper styles
import { Box } from '@chakra-ui/react';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function Carousel() {

  return (
    <Box mt="12" mb="8">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Box backgroundImage="/continenteeuropeu.png" h="450px">

          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box backgroundImage="/continenteeuropeu.png" h="450px">

          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box backgroundImage="/continenteeuropeu.png" h="450px">

          </Box>
        </SwiperSlide>

      </Swiper>
    </Box >
  )
}