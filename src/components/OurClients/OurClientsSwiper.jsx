import { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper';
import OurClientsTitle from './OurClientsTitle';
import OurClientsList from '../../mocks/ourclients_list';
import * as C from './style';

const OurClientsSwiper = () => {
  const [OurClients, setOurClients] = useState([]);
  const ourClientsRef = useRef(null);

  const handleNext = useCallback(() => {
    if (!ourClientsRef.current) return;
    ourClientsRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!ourClientsRef.current) return;
    ourClientsRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    setOurClients(OurClientsList);
  }, []);

  return (
    <C.OurClientsSwiper>
      <OurClientsTitle handlePrev={handlePrev} handleNext={handleNext} />
      <Swiper
        modules={[FreeMode, Navigation]}
        allowTouchMove={false}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        ref={ourClientsRef}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {OurClients.map((item) => (
          <SwiperSlide key={item.id} className="ourclients__contents">
            <figure className="ourclients__item">
              <img src={item.img} alt={`Client ${item.id}`} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </C.OurClientsSwiper>
  );
};

export default OurClientsSwiper;
