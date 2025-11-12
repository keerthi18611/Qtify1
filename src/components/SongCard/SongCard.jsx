import React from "react";
import styles from "./SongCard.module.css";
import Chip from "@mui/material/Chip";

function SongCard({ image, title, likes }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <Chip
          label={`${likes} Likes`}
          className={styles.chip}
          size="small"
        />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SongCard;
