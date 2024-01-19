import "./MainNav.scss";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="nav-content">
      <div className="nav-content-links">
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
      <Link className="nav-link-panier" to="/panier">
        <div className="nav-cart">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/128/2838/2838895.png"
              alt="Panier"
            />
          </div>
          <span>(0)</span>
        </div>
      </Link>
    </div>
  );
}

export default MainNav;
