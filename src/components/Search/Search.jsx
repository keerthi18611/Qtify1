import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Search.module.css"; 

export default function Section({ title, data = [], type }) {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Rock", "Pop", "Jazz", "Blues"];

  // Song filter
  const filteredData =
    type === "song"
      ? activeTab === "All"
        ? data
        : data.filter((song) => song.genre === activeTab)
      : data;

  // Show All expands into grid view
  const dataToShow = showAll ? filteredData : filteredData.slice(0, 10);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>{title}</h2>

        {/* Right Side Show All */}
        {filteredData.length > 0 && (
          <button
            className={styles.showAllBtn}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {/* Tabs for songs only */}
      {type === "song" && (
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                activeTab === cat ? styles.activeTab : ""
              }`}
              onClick={() => {
                setActiveTab(cat);
                setShowAll(false); // Reset show all when changing tab
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* If Show-All enabled → Grid view | Else → Carousel */}
      {showAll ? (
        <div className={styles.grid}>
          {dataToShow.map((item) => (
            <div key={item.id}>{item.title || item.name}</div>
          ))}
        </div>
      ) : (
        <Carousel data={filteredData} type={type} />
      )}
    </div>
  );
}
