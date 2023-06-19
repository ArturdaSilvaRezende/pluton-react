import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import CarouselList from './CarouselList';
import Left from '../../assets/images/carousel/Left.png';
import Right from '../../assets/images/carousel/Right.png';

const CarouselContent = () => {
  const [carouselItem, setCarouselItem] = useState([]);

  useEffect(() => {
    setCarouselItem(CarouselList);
  }, []);

  return (
    <>
      <Swiper
        allowTouchMove={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          navigation: true,
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={true}
        className="mySwiper"
      >
        {carouselItem.map((item) => (
          <SwiperSlide key={item.id} className="mySwiper__item">
            <div className="mySwiper__description">
              <h1>{item.title}</h1>
              <h2>{item.subtitle}</h2>
              <p>{item.description}</p>
              <button>Read More</button>
            </div>
            <figure className="mySwiper__img">
              <img src={item.img} alt={item.title} />
            </figure>
          </SwiperSlide>
        ))}
        <button className="swiper-button-prev">
          <img src={Left} alt="button-icon-left" />
        </button>
        <button className="swiper-button-next">
          <img src={Right} alt="button-icon-right" />
        </button>
      </Swiper>
    </>
  );
};

export default CarouselContent;
