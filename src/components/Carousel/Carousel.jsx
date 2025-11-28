import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import AlbumCard from "../AlbumCard/AlbumCard";
import SongCard from "../SongCard/SongCard";

import styles from "./Carousel.module.css";

import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

export default function Carousel({ data = [], type }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carouselWrapper}>

      {/* LEFT ARROW */}
      <img
        ref={prevRef}
        src={leftArrow}
        alt="Prev"
        className={styles.navBtn}
      />

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={5}
        navigation={{
          prevEl: null,
          nextEl: null,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {type === "song" ? (
              <SongCard data={item} />
            ) : (
              <AlbumCard data={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* RIGHT ARROW */}
      <img
        ref={nextRef}
        src={rightArrow}
        alt="Next"
        className={styles.navBtn}
      />

    </div>
  );
}

