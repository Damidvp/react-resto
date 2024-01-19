import "./MainNav.scss";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="nav-content">
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/13/11/44/taco-5651624_1280.png"
              alt="Big Fat Tacos Logo"
            />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/presentation">
            Présentation
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/carte">
            Carte
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/localisation">
            Localisation
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
