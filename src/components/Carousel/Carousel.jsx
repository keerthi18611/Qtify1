import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../AlbumCard/AlbumCard";
import SongCard from "../SongCard/SongCard";
import styles from "./Carousel.module.css";

export default function Carousel({ data = [], type }) {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={5}
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
              <AlbumCard data={item} type={type} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
