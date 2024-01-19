import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/components-accueil/Accueil";
import MainNav from "./components/components-nav/MainNav";
import Footer from "./components/components-footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
