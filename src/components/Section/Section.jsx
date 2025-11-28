import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Section.module.css";

export default function Section({ title, data = [], type, showAll = false, onShowAll }) {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Rock", "Pop", "Jazz", "Blues"];

  const filteredData =
    type === "song"
      ? activeTab === "All"
        ? data
        : data.filter(item => {
            if (!item.genre) return false;
            if (typeof item.genre === "string") return item.genre.toLowerCase() === activeTab.toLowerCase();
            if (item.genre.key) return item.genre.key.toLowerCase() === activeTab.toLowerCase();
            if (item.genre.label) return item.genre.label.toLowerCase() === activeTab.toLowerCase();
            return false;
          })
      : data;

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>{title}</h2>
        {type === "album" && (
          <button className={styles.showAllBtn} onClick={() => onShowAll && onShowAll()}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {type === "song" && title === "Songs" && (
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button key={cat} className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ""}`} onClick={() => setActiveTab(cat)}>
              {cat}
            </button>
          ))}
        </div>
      )}

      {type === "album" && showAll ? (
        <div className={styles.gridWrapper}>
          {filteredData.map(item => (
            <div key={item.id} className={styles.gridItem}>
              <AlbumCard data={item} type="album" />
            </div>
          ))}
        </div>
      ) : (
        <Carousel data={filteredData} type={type} />
      )}
    </div>
  );
}
