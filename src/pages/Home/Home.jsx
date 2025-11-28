
import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import styles from "./Home.module.css";

export default function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  // one showAll per album section
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [topRes, newRes, songsRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/albums/top"),
          axios.get("https://qtify-backend.labs.crio.do/albums/new"),
          axios.get("https://qtify-backend.labs.crio.do/songs"),
        ]);

        const getPayload = (r) => (r?.data?.data ? r.data.data : r?.data ?? []);
        setTopAlbums(getPayload(topRes));
        setNewAlbums(getPayload(newRes));
        setSongs(getPayload(songsRes));
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      <Hero />

      <Section
        title="Top Albums"
        data={topAlbums}
        type="album"
        showAll={showAllTop}
        onShowAll={() => setShowAllTop((s) => !s)}
      />

      <Section
        title="New Albums"
        data={newAlbums}
        type="album"
        showAll={showAllNew}
        onShowAll={() => setShowAllNew((s) => !s)}
      />

      <Section
        title="Songs"
        data={songs}
        type="song"
      />
    </div>
  );
}
