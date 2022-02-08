import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSong] = useState([]);
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
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
