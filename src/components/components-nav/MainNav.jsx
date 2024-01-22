import "./MainNav.scss";
import { Link, useNavigate } from "react-router-dom";
import { PanierContext } from "../../utils/context/PanierContext";
import { AuthContext } from "../../utils/context/AuthContext";
import { useContext } from "react";
import { auth } from "../../firebase";

function MainNav() {
  const { nbPlatsCommande } = useContext(PanierContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (e) {
      console.error("Erreur déconnexion : ", e.message);
    }
  };
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
      {currentUser ? (
        <div className="admin-div">
          <ul>
            <li>
              <Link className="nav-link" to="/gestion/liste-plats">
                Liste des plats
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/gestion/ajout-plat">
                Ajouter un plat
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Déconnexion</button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <Link className="nav-link-panier" to="/panier">
        <div className="nav-cart">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/128/2838/2838895.png"
              alt="Panier"
            />
          </div>
          <span>({nbPlatsCommande})</span>
        </div>
      </Link>
    </div>
  );
}

export default MainNav;
