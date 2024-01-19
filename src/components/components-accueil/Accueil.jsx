import "./Accueil.scss";
import Slider from "./subcomponents/Slider";
import OrderShortcut from "./subcomponents/OrderShortcut";

function Accueil() {
  return (
    <div className="accueil-content">
      <h1>Bienvenue chez Big Fat Tacos</h1>
      <Slider />
      <OrderShortcut />
    </div>
  );
}

export default Accueil;
