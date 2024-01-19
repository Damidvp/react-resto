import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/components-accueil/Accueil";
import MainNav from "./components/components-nav/MainNav";
import Footer from "./components/components-footer/Footer";
import Presentation from "./components/components-presentation/Presentation";
import Carte from "./components/components-carte/Carte";
import Localisation from "./components/components-localisation/Localisation";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/localisation" element={<Localisation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
