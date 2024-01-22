import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/components-accueil/Accueil";
import MainNav from "./components/components-nav/MainNav";
import Footer from "./components/components-footer/Footer";
import Presentation from "./components/components-presentation/Presentation";
import Carte from "./components/components-carte/Carte";
import Localisation from "./components/components-localisation/Localisation";
import Panier from "./components/components-panier/Panier";
import { Helmet } from "react-helmet";

import { PlatProvider } from "./utils/context/PlatContext";
import { PanierProvider } from "./utils/context/PanierContext";
import PlanSite from "./components/components-plansite/PlanSite";
import Validation from "./components/components-panier/subcomponents/Validation";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Big Fat Tacos</title>
      </Helmet>
      <PanierProvider>
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
            <Route path="/panier" element={<Panier />} />
            <Route
              path="/panier/validation/:destinataire"
              element={<Validation />}
            />
            <Route path="/plan" element={<PlanSite />} />
          </Routes>
          <Footer />
        </Router>
      </PanierProvider>
    </div>
  );
}

export default App;
