import React, { useState } from "react";
import styles from "./Section.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data = [], type = "album" }) {
  const [showAll, setShowAll] = useState(false);

  const isSongSection = type === "song";

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {!isSongSection && (
          <button
            className={styles.toggleButton}
            onClick={() => setShowAll((p) => !p)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {isSongSection ? (
        <Carousel data={data} type={type} />
      ) : !showAll ? (
        <Carousel data={data} type={type} />
      ) : (
        <div className={`${styles.albumContainer} ${styles.showAll}`}>
          {data.map((item) => (
            <AlbumCard key={item.id} data={item} type="album" />
          ))}
        </div>
      )}
    </section>
  );
}
