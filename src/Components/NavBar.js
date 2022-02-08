import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/songs">Tuner</Link>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
