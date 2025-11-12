import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data = [], type = "album" }) {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(!showAll);

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.toggleButton} onClick={handleToggle}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* Content */}
      <div
        className={`${styles.albumContainer} ${
          showAll ? styles.showAll : ""
        }`}
      >
        {!showAll ? (
          <Carousel data={data} type={type} />
        ) : (
          data.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))
        )}
      </div>
    </div>
  );
}
