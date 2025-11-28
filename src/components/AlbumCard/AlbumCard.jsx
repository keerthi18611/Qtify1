import React from "react";
import styles from "./AlbumCard.module.css";
import Chip from "@mui/material/Chip";
import { formatLikes } from "../../helpers/helpers";

export default function AlbumCard({ data, type }) {
  if (!data) return null;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.title} className={styles.image} />

        <div className={styles.chipWrapper}>
          <Chip
            label={
              type === "song"
                ? `${formatLikes(data.likes)} Likes`
                : `${formatLikes(data.follows)} Follows`
            }
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
