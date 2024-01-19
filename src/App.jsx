import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/components-accueil/Accueil";
import MainNav from "./components/components-nav/MainNav";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route path="*" element={<Accueil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
