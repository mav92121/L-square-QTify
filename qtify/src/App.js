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
    console.log(data);
    setAlbums(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [albums, setAlbums] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Tob Albums" data={albums} />
    </div>
  );
}

export default App;
