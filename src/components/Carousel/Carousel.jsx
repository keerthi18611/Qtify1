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
      <button ref={el => (prevRef.current = el)} className={styles.navBtn} aria-label="prev">
        <img src={leftArrow} alt="prev" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={5}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {data.map(item => (
          <SwiperSlide key={item.id}>
            {type === "song" ? <SongCard data={item} /> : <AlbumCard data={item} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <button ref={el => (nextRef.current = el)} className={styles.navBtn} aria-label="next">
        <img src={rightArrow} alt="next" />
      </button>
    </div>
  );
}
