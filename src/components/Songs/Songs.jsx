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

        const songsArr = songsRes.data?.data ?? [];
        const genresArr = genresRes.data?.data ?? [];

        setSongs(songsArr);
        setGenres([{ key: "all", label: "All" }, ...genresArr]);
      } catch (err) {
        console.error("Songs fetch failed", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((s) => s.genre === selectedGenre);

  return (
    <section className={styles.songsSection}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <Tabs
          value={selectedGenre}
          onChange={(e, nv) => setSelectedGenre(nv)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              color: "#666",
            },
            "& .Mui-selected": {
              color: "var(--color-primary) !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--color-primary)",
            },
          }}
        >
          {genres.map((g) => (
            <Tab
              key={g.key}
              value={g.key}
              label={g.label}
            />
          ))}
        </Tabs>
      </div>

      {/* Content */}
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
