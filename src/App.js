import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import AlbumPage from "./views/AlbumPage";
import ArtistPage from "./views/ArtistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
