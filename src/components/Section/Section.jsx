import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import AlbumCard from "../AlbumCard/AlbumCard";
import SongCard from "../SongCard/SongCard";
import styles from "./Section.module.css";

export default function Section({ title, data = [], type, showAll = false, onShowAll }) {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Rock", "Pop", "Jazz", "Blues"];

  // NOTE: adapt to your API: songs may have genre.key or genre (string). Adjust accordingly.
  const filteredData =
    type === "song" && title === "Songs"
      ? activeTab === "All"
        ? data
        : data.filter((item) => {
            // safe checks for genre shape
            if (!item.genre) return false;
            if (typeof item.genre === "string") return item.genre.toLowerCase() === activeTab.toLowerCase();
            if (Array.isArray(item.genre)) return item.genre.some(g => (g.label || g).toLowerCase() === activeTab.toLowerCase());
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
          <button className={styles.showAllBtn} onClick={() => { console.log('click showAll, current:', showAll); onShowAll && onShowAll(); }}>
  {showAll ? "Collapse" : "Show All"}
</button>

        )}
      </div>

      {type === "song" && title === "Songs" && (
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Show grid when showAll === true for albums */}
      {type === "album" && showAll ? (
        <div className={styles.gridWrapper}>
          {filteredData.map((item) => (
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
