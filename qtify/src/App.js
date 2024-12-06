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
  useEffect(() => {
    fetchData();
    fetchNewAlbums();
  }, []);
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={albums} />
      <Section title="New Albums" data={newAlbums} />
    </div>
  );
}

export default App;
