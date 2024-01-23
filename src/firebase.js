// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_8dc-xAbZ5iXEXwg6njqgOCdaBShlOSs",
  authDomain: "big-fat-tacos.firebaseapp.com",
  projectId: "big-fat-tacos",
  storageBucket: "big-fat-tacos.appspot.com",
  messagingSenderId: "668507528418",
  appId: "1:668507528418:web:bc802abebacb73aa9992bb",
  measurementId: "G-RYC2N27F77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const database = getFirestore(app);

// JSON API data
const collectionName = "plats";
const documentName = "FGrvGR8A7djFpR5qhEjg";
const jsonToStore = {
  plats: [
    {
      id: 1,
      nom: "Le Gourmand",
      description:
        "Viande grillée hachée, guacamole, tomates, fromage cheddar, sauce barbecue",
      photo:
        "https://cdn.pixabay.com/photo/2015/11/02/20/27/taco-1018962_1280.jpg",
      prix: 12.5,
      pays: "Mexique",
      categorie: "Plat principal",
      dispo: true,
    },
    {
      id: 2,
      nom: "Le Spécial Mexicain",
      description:
        "Porc épicé mariné, oignons rouges, coriandre, sauce piquante au chipotle",
      photo:
        "https://cdn.pixabay.com/photo/2017/11/13/03/56/grilled-pineapple-pork-burrito-2944562_1280.jpg",
      prix: 12,
      pays: "Mexique",
      categorie: "Plat principal",
      dispo: true,
    },
    {
      id: 3,
      nom: "Le Chocobo Party",
      description:
        "Chocobo croustillant, maïs, haricots noirs, avocat, crème à l'ail",
      photo:
        "https://cdn.pixabay.com/photo/2017/12/27/04/28/tortilla-3041938_1280.jpg",
      prix: 13,
      pays: "Mexique",
      categorie: "Plat principal",
      dispo: true,
    },
    {
      id: 4,
      nom: "Le Végétarien",
      description: "Haricots noirs, maïs, poivrons, oignons, jalapeños",
      photo:
        "https://cdn.pixabay.com/photo/2019/04/14/03/23/burrito-4126116_1280.jpg",
      prix: 11,
      pays: "Mexique",
      categorie: "Plat principal",
      dispo: true,
    },
    {
      id: 5,
      nom: "Le Raffiné",
      description:
        "Filet de boeuf, champignons, roquette, fromage bleu, sauce au poivre",
      photo:
        "https://cdn.pixabay.com/photo/2020/02/07/20/10/taco-4828265_1280.jpg",
      prix: 11.5,
      pays: "Mexique",
      categorie: "Plat principal",
      dispo: true,
    },
    {
      id: 6,
      nom: "Le Taco Ultimo",
      description:
        "Viande grillée hachée, guacamole, piments, tomates, oignons, fromage, laitue",
      photo:
        "https://cdn.pixabay.com/photo/2015/04/16/01/05/food-724926_1280.jpg",
      prix: 14.5,
      pays: "Mexique",
      categorie: "Plat principal",
      dispo: true,
    },
  ],
};

const firebaseData = {
  setData: async () => {
    await setDoc(doc(database, collectionName, documentName), jsonToStore);
  },
  getData: async () => {
    return await getDoc(doc(database, collectionName, documentName));
  },
};

export { auth, analytics, firebaseData, database };
