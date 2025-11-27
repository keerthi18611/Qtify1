import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newSongs, setNewSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const topAlbumsRes = await fetch("https://qtify-backend.labs.crio.do/albums/new");
        const newSongsRes = await fetch("https://qtify-backend.labs.crio.do/songs");

        const topAlbumsJson = await topAlbumsRes.json();
        const newSongsJson = await newSongsRes.json();

        // Version 1: APIs wrap arrays inside { data: [...] }
        if (topAlbumsJson && Array.isArray(topAlbumsJson.data)) {
          setTopAlbums(topAlbumsJson.data);
        } else if (Array.isArray(topAlbumsJson)) {
          setTopAlbums(topAlbumsJson);
        }

        if (newSongsJson && Array.isArray(newSongsJson.data)) {
          setNewSongs(newSongsJson.data);
        } else if (Array.isArray(newSongsJson)) {
          setNewSongs(newSongsJson);
        }
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar searchData={topAlbums} />
      <Hero />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Songs" data={newSongs} type="song" />
        <Songs />
      </div>
    </>
  );
}

export default App;
