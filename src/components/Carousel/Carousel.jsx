import { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import CarouselList from '../../mocks/carousel_list';
import Left from '../../assets/images/carousel/Left.png';
import Right from '../../assets/images/carousel/Right.png';

const CarouselContent = () => {
  const [carouselItem, setCarouselItem] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setCarouselItem(CarouselList);
  }, []);

  const handleNext = useCallback(() => {
    if (!carouselRef.current) return;
    carouselRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!carouselRef.current) return;
    carouselRef.current.swiper.slidePrev();
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
        pagination={true}
        className="mySwiper"
        ref={carouselRef}
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
        <button className="carousel__button-prev" onClick={handlePrev}>
          <img src={Left} alt="button-icon-left" />
        </button>
        <button className="carousel__button-next" onClick={handleNext}>
          <img src={Right} alt="button-icon-right" />
        </button>
      </Swiper>
    </>
  );
};

export default CarouselContent;
