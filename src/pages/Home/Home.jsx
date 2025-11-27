import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../../components/Section/Section";
import styles from "./Home.module.css";

export default function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [topRes, newRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/albums/top"),
          axios.get("https://qtify-backend.labs.crio.do/albums/new")
        ]);

        setTopAlbums(topRes.data);
        setNewAlbums(newRes.data);
      } catch (err) {
        console.error("Album fetch failed:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
    </div>
  );
}
