import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Songs.module.css";
import SongCard from "../SongCard/SongCard";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Fetch songs and genres
  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/songs"),
          axios.get("https://qtify-backend.labs.crio.do/genres"),
        ]);

        setSongs(songsRes.data);
        setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
      } catch (error) {
        console.error("Error fetching songs or genres:", error);
      }
    };
    fetchSongsAndGenres();
  }, []);

  // Filter songs based on selected genre
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>

      <div className={styles.tabsContainer}>
        <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          textColor="inherit"
          indicatorColor="primary"
          className={styles.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "var(--color-green)" } }}
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
              className={`${styles.tab} ${
                selectedGenre === genre.key ? styles.activeTab : ""
              }`}
            />
          ))}
        </Tabs>
      </div>

      <Carousel>
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            image={song.image}
            title={song.title}
            likes={song.likes}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Songs;
