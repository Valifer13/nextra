import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideCard = ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((data) => (
        <SwiperSlide>
          <Card items={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCard;
