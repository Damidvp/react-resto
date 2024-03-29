import "./App.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import LoginAdmin from "./components/components-admin/components-admin-login/LoginAdmin";

import { AuthContext } from "./utils/context/AuthContext";
import { useContext } from "react";
import ListePlatsAdmin from "./components/components-admin/components-admin-listeplats/ListePlatsAdmin";
import AjoutPlatAdmin from "./components/components-admin/components-admin-ajoutplat/AjoutPlatAdmin";
import UpdatePlatAdmin from "./components/components-admin/components-admin-updateplat/UpdatePlatAdmin";
//import { firebaseData } from "./firebase";

function App() {
  const { currentUser } = useContext(AuthContext);
  //firebaseData.setData();
  return (
    <div className="App">
      <Helmet>
        <title>Big Fat Tacos</title>
      </Helmet>
      <PanierProvider>
        <Router>
          <div className="App-main-content">
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
              <Route path="/gestion/login" element={<LoginAdmin />} />
              <Route path="/plan" element={<PlanSite />} />
              <Route
                path="/gestion/liste-plats"
                element={
                  currentUser ? (
                    <PlatProvider>
                      <ListePlatsAdmin />
                    </PlatProvider>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/gestion/ajout-plat"
                element={
                  currentUser ? (
                    <PlatProvider>
                      <AjoutPlatAdmin />
                    </PlatProvider>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/gestion/update-plat/:id"
                element={
                  currentUser ? (
                    <PlatProvider>
                      <UpdatePlatAdmin />
                    </PlatProvider>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </PanierProvider>
    </div>
  );
}

export default App;
