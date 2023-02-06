import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="hvr-icon-grow"><i className="fa-solid fa-house hvr-icon"></i> Home </Link> | <Link to="/favoritos" className="hvr-icon-grow"><i className="fa-solid fa-star hvr-icon-grow"></i> Favoritos </Link>
    </nav>
  );
}

export default Navbar