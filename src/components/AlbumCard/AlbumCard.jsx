import React from "react";
import styles from "./AlbumCard.module.css";
import Chip from "@mui/material/Chip";

/**
 * AlbumCard Component
 * Reusable component to display Album or Song details
 * Props:
 *  - image: string (album cover)
 *  - title: string (album title)
 *  - follows: number (for albums)
 *  - likes: number (for songs)
 *  - isSong: boolean (to switch chip label)
 */
export default function AlbumCard({ image, title, follows, likes, isSong }) {
  return (
    <div className={styles.card}>
      {/* Album/Song Image */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.chipWrapper}>
          <Chip
            label={
              isSong
                ? `${likes?.toLocaleString()} Likes`
                : `${follows?.toLocaleString()} Follows`
            }
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      {/* Album Title */}
      <div className={styles.albumTitle}>
        <p title={title}>{title}</p>
      </div>
    </div>
  );
}
