import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


const Order = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-20'>
      <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"Order Online"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <img className='relative' src={slide1} alt="" />
          <p className='text-center text-white absolute shadow-2xl font-bold text-xl uppercase translate-x-1/2 bottom-5'>Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className='text-center text-white absolute shadow-2xl font-bold text-xl uppercase translate-x-1/2 bottom-5'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className='text-center text-white absolute shadow-2xl font-bold text-xl uppercase translate-x-1/2 bottom-5'>Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className='text-center text-white absolute shadow-2xl font-bold text-xl uppercase translate-x-1/2 bottom-5'>Desert</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className='text-center text-white absolute shadow-2xl font-bold text-xl uppercase translate-x-1/2 bottom-5'>Salads</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Order;