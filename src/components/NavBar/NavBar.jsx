import "./navbar.scss";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const stylesH2 = { color: "red", fontSize: "40px" };

  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link to="/" className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </Link>
        <Link to="/category/accesorios" className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
        </Link>
        <Link to="/category/vestimenta"  className="nav-item">
          <a className="nav-link" href="#">Vestimenta</a>
        </Link>
        <Link to="/category/calzado" className="nav-item">
          <a className="nav-link" href="#">Calzado</a>
        </Link>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar;
