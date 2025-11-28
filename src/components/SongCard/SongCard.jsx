import React from "react";
import styles from "./SongCard.module.css";
import Chip from "@mui/material/Chip";
import { formatLikes } from "../../helpers/helpers";

export default function SongCard({ data }) {
  if (!data) return null;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.title} className={styles.image} />

        <div className={styles.chipWrapper}>
          <Chip
            label={`${formatLikes(data.likes)} Likes`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title} title={data.title}>
        {data.title}
      </p>
    </div>
  );
}
