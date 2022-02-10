import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap"

export default function NavBar() {
  return (
    <nav>
      <Link to="/songs">Tuner</Link>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
      {/* <Button variant="outline-success" size="sm" className="col-4" as={Link} to={"/songs/new"}>
        New Transaction
      </Button> */}
    </nav>
  );
}
