import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
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
    <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
  </div>
  );
}

export default SongEditForm;
