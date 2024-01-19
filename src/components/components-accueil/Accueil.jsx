import "./Accueil.scss";
import Slider from "./subcomponents/Slider";
import OrderShortcut from "./subcomponents/OrderShortcut";
import { PlatProvider } from "../../utils/context/PlatContext";

function Accueil() {
  return (
    <div className="accueil-content">
      <h1>Bienvenue chez Big Fat Tacos</h1>
      <PlatProvider>
        <Slider />
      </PlatProvider>
      <OrderShortcut />
    </div>
  );
}

export default Accueil;
