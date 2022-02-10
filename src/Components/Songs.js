import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSong] = useState([]);
  let navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => {
        console.log(res.data);
        setSong(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>Artist Name:</th>
              <th>Album:</th>
              <th>Runtime (in minutes):</th>
              <th>View Song:</th>
              <th id="delete-emoji">🚫</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} id={song.id} handleDelete={handleDelete}/>;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
