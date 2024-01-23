import "./LoginAdmin.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function LoginAdmin() {
  /*
  const createAdminAccount = async (email, pwd) => {
    try {
      const adminCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pwd
      );
      const admin = adminCredential.user;
      return admin;
    } catch (e) {
      console.error("Erreur compte admin : ", e.message);
    }
  };
  createAdminAccount("supervisor@gmail.com", "supervisor");
*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setIsCorrect(false);
      console.error("Erreur connexion : " + e.message);
    }
  };
  return (
    <div className="login-content">
      <h1>Connexion Admin</h1>
      <div className="login-content-fields">
        <div className="login-content-field">
          <label htmlFor="email">Email : </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-content-field">
          <label htmlFor="password">Mot de passe : </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isCorrect ? (
          <div className="login-error">Email ou mot de passe incorrect</div>
        ) : (
          ""
        )}
        <div>
          <button onClick={handleLogin}>Connexion</button>
        </div>
        <div className="login-content-message">
          <p>
            Attention, cette partie du site est exclusivement réservée au
            personnel de Big Fat Tacos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
