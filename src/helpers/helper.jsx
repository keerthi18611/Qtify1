import React from "react";
import styles from "./helpers.module.css";

export function Skeleton({ width = "100%", height = "20px" }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height }}
    ></div>
  );
}
