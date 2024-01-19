import "./MainNav.scss";

function MainNav() {
  return (
    <div className="nav-content">
      <ul>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2020/10/13/11/44/taco-5651624_1280.png"
            alt="Big Fat Tacos Logo"
          />
        </li>
        <li>Présentation</li>
        <li>Carte</li>
        <li>Localisation</li>
      </ul>
    </div>
  );
}

export default MainNav;
