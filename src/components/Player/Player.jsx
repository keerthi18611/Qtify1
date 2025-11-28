import React from "react";
import styles from "./Player.module.css";
import sampleImg from "../../assets/Hero-headphone.png"; // replace with song thumbnail

function Player() {
  return (
    <div className={styles.player}>
      {/* LEFT SIDE — SONG INFO */}
      <div className={styles.songInfo}>
        <img src={sampleImg} alt="thumbnail" className={styles.thumbnail} />

        <div>
          <p className={styles.songName}>Song name</p>
          <p className={styles.album}>Album name</p>
        </div>
      </div>

      {/* CENTER — PLAY/PAUSE */}
      <div className={styles.controls}>
        <button className={styles.playBtn}>⏸</button>
      </div>

      {/* RIGHT — PROGRESS BAR */}
      <div className={styles.progress}>
        <span>0:38</span>
        <div className={styles.bar}>
          <div className={styles.fill}></div>
        </div>
        <span>3:38</span>
      </div>
    </div>
  );
}

export default Player;
