import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/components-accueil/Accueil";
import MainNav from "./components/components-nav/MainNav";
import Footer from "./components/components-footer/Footer";
import Presentation from "./components/components-presentation/Presentation";
import Carte from "./components/components-carte/Carte";
import Localisation from "./components/components-localisation/Localisation";
import { Helmet } from "react-helmet";

import { PlatProvider } from "./utils/context/PlatContext";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Big Fat Tacos</title>
      </Helmet>
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route
            path="/carte"
            element={
              <PlatProvider>
                <Carte />
              </PlatProvider>
            }
          />
          <Route path="/localisation" element={<Localisation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
