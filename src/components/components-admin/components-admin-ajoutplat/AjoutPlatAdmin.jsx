import "./AjoutPlatAdmin.scss";

function AjoutPlatAdmin() {
  return (
    <div className="ajoutplat-content">
      <h1>Ajouter un nouveau plat</h1>
      <form>
        <div className="form-field">
          <label>Nom du plat : </label>
          <input id="nom" name="nom" type="text" />
        </div>
        <div className="form-field">
          <label>Description des ingrédients : </label>
          <textarea></textarea>
        </div>
        <div className="form-field">
          <label>URL photo : </label>
          <input type="text" />
        </div>
        <div className="form-field">
          <label>Pays d'origine : </label>
          <input type="text" />
        </div>
        <div className="form-field">
          <label>Catégorie : </label>
          <select>
            <option>Entrée</option>
            <option>Plat principal</option>
            <option>Dessert</option>
          </select>
        </div>
        <div className="form-field">
          <label>Prix de vente : </label>
          <input type="number" />
        </div>
        <div>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

export default AjoutPlatAdmin;
