import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";



function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [topRes, newRes, songsRes] = await Promise.all([
          fetch("https://qtify-backend.labs.crio.do/albums/top"),
          fetch("https://qtify-backend.labs.crio.do/albums/new"),
          fetch("https://qtify-backend.labs.crio.do/songs"),
        ]);

        const topJson = await topRes.json();
        const newJson = await newRes.json();
        const songsJson = await songsRes.json();

        setTopAlbums(topJson.data ?? topJson);
        setNewAlbums(newJson.data ?? newJson);
        setSongs(songsJson.data ?? songsJson);

      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar searchData={topAlbums} />
      <Hero />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>

        {/* ONLY THESE THREE SECTIONS */}
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} type="song" />

      </div>
      
    </>
  );
}

export default App;
