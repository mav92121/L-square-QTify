import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import Section from "./components/Section/Section";
// import Search from "./components/Search/Search";

function App() {
  const fetchData = async () => {
    const data = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    setAlbums(data.data);
  };
  const fetchNewAlbums = async () => {
    const data = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    setNewAlbums(data.data);
  };
  const fetchSongs = async () => {
    const data = await axios.get("https://qtify-backend-labs.crio.do/songs");
    setSongs(data.data);
  };
  useEffect(() => {
    fetchData();
    fetchNewAlbums();
    fetchSongs();
  }, []);
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={albums} />
      <Section title="New Albums" data={newAlbums} />
      <Section title="Songs" isSongComponent={true} data={songs} />
    </div>
  );
}

export default App;
