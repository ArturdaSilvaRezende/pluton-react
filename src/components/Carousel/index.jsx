import CarouselContent from './Carousel';
import * as C from './style';

const Carousel = () => {
  return (
    <C.Carousel>
      <div className="carousel__mask"></div>
      <CarouselContent />
    </C.Carousel>
  );
};

export default Carousel;
