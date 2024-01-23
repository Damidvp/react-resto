import "./AjoutPlatAdmin.scss";
import { PlatContext } from "../../../utils/context/PlatContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function AjoutPlatAdmin() {
  const { addPlat } = useContext(PlatContext);
  const navigate = useNavigate();

  const [nomPlat, setNomPlat] = useState("");
  const [descriptionPlat, setDescriptionPlat] = useState("");
  const [urlPhotoPlat, setUrlPhotoPlat] = useState("");
  const [paysPlat, setPaysPlat] = useState("");
  const [categoriePlat, setCategoriePlat] = useState("Entrée");
  const [prixPlat, setPrixPlat] = useState(0);

  const commitPlat = (e) => {
    e.preventDefault();
    let plat = {
      nom: nomPlat,
      description: descriptionPlat,
      photo: urlPhotoPlat,
      pays: paysPlat,
      categorie: categoriePlat,
      prix: prixPlat,
    };
    addPlat(plat);
    navigate("/gestion/liste-plats");
  };

  return (
    <div className="ajoutplat-content">
      <h1>Ajouter un nouveau plat</h1>
      <form onSubmit={commitPlat}>
        <div className="form-field">
          <label htmlFor="nom">Nom du plat : </label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={nomPlat}
            onInput={(e) => setNomPlat(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description des ingrédients : </label>
          <textarea
            id="description"
            name="description"
            value={descriptionPlat}
            onInput={(e) => setDescriptionPlat(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="url">URL photo : </label>
          <input
            id="url"
            name="url"
            type="text"
            value={urlPhotoPlat}
            onInput={(e) => setUrlPhotoPlat(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="pays">Pays d'origine : </label>
          <input
            id="pays"
            name="pays"
            type="text"
            value={paysPlat}
            onInput={(e) => setPaysPlat(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="categorie">Catégorie : </label>
          <select
            id="categorie"
            name="categorie"
            value={categoriePlat}
            onChange={(e) => setCategoriePlat(e.target.value)}
            required
          >
            <option>Entrée</option>
            <option>Plat principal</option>
            <option>Dessert</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="prix">Prix de vente : </label>
          <input
            id="prix"
            nom="prix"
            type="number"
            value={prixPlat}
            onInput={(e) => setPrixPlat(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

export default AjoutPlatAdmin;
