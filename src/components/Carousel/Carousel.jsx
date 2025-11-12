import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

function Carousel({ children }) {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className={styles.swiperContainer}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
