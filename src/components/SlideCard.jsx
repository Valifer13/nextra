import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideCard = ({ items }) => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((data, index) => (
        <SwiperSlide key={index} className="group/card">
          <a href={`/detail?name=${items[index].name}&id=${index}`}>
            <Card items={data} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCard;
