import { Link } from "react-router-dom";

function Song({ song, id, handleDelete }) {
  
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
      <td>
        <button onClick={()=>handleDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Song;
