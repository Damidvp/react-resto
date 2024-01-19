import "./OrderShortcut.scss";
import { Link } from "react-router-dom";

function OrderShortcut() {
  return (
    <div className="ordershortcut-content">
      <h2>Nos plats vous ont fait envie ?</h2>
      <Link to="/carte">
        <button>Commandez ici</button>
      </Link>
    </div>
  );
}

export default OrderShortcut;
