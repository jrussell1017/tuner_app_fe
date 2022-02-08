import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  const addSong = () => {
    axios
      .post(`${API}/songs`, song)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn("catch", error));
  };


  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Artist Name:</label>
        <input
          id="artist_name"
          value={song.artist_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist..."
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          required
          value={song.album}
          placeholder="Album Name..."
          onChange={handleTextChange}
        />
        <label htmlFor="time">Runtime:</label>
        <input
          id="time"
          type="text"
          name="category"
          value={song.time}
          placeholder="Runtime (in minutes)..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;
