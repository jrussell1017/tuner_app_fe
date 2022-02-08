import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{song.artist_name}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
      <td>
        <Link to={`/songs/${song.id}/edit`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Song;
