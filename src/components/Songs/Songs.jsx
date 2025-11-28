import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Songs.module.css";

import Carousel from "../Carousel/Carousel";
import { Skeleton } from "../../helpers/helper";

import { Tabs, Tab } from "@mui/material";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/songs"),
          axios.get("https://qtify-backend.labs.crio.do/genres"),
        ]);

        const songsArr = Array.isArray(songsRes.data) ? songsRes.data : [];
        const genresArr = Array.isArray(genresRes.data) ? genresRes.data : [];

        setSongs(songsArr);
        setGenres([{ key: "all", label: "All" }, ...genresArr]);
      } catch (err) {
        console.error("Songs fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Filtering logic
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <section className={styles.songsSection}>
      <h2 className={styles.title}>Songs</h2>

      {/* GENRE TABS */}
      <div className={styles.tabsContainer}>
        <Tabs
          value={selectedGenre}
          onChange={(e, nv) => setSelectedGenre(nv)}
          variant="scrollable"
          scrollButtons={false}
          TabIndicatorProps={{
            style: { backgroundColor: "#34C759", height: "3px" },
          }}
        >
          {genres.map((g) => (
            <Tab
              key={g.key}
              value={g.key}
              label={g.label}
              sx={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: selectedGenre === g.key ? 600 : 400,
                color: selectedGenre === g.key ? "#34C759" : "#444",
              }}
            />
          ))}
        </Tabs>
      </div>

      {/* CAROUSEL OR SKELETON */}
      {loading ? (
        <div className={styles.skeletonRow}>
          <Skeleton width="160px" height="140px" />
          <Skeleton width="160px" height="140px" />
          <Skeleton width="160px" height="140px" />
        </div>
      ) : (
        <Carousel data={filteredSongs} type="song" />
      )}
    </section>
  );
}

export default Songs;
