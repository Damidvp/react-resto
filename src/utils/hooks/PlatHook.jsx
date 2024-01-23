import { useEffect, useState } from "react";
import { database } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const doc_id = "FGrvGR8A7djFpR5qhEjg";
const platCollection = collection(database, "plats");

export function useFetchPlatData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const snapshot = await getDocs(platCollection);
      const platData = snapshot.docs.map((doc) => ({
        id: doc.id,
        plats: doc.data().plats,
      }));
      setData(platData[0].plats);
    } catch (e) {
      console.error("Erreur lors du GET : ", e);
    }
  };

  const addData = async (platToAdd) => {
    try {
      const docRef = doc(platCollection, doc_id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        platToAdd.id = docRef.id;
        platToAdd.prix = parseFloat(platToAdd.prix);
        const updatedPlats = [...docSnapshot.data().plats, platToAdd];
        await updateDoc(docRef, { plats: updatedPlats });
      }
      fetchData();
    } catch (e) {
      console.error("Erreur lors du POST : ", e);
    }
  };

  const updData = async (platToUpd) => {
    try {
      const docRef = doc(platCollection, doc_id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const existingPlats = docSnapshot.data().plats || [];
        const platIndex = existingPlats.findIndex(
          (p) => p.id.toString() === platToUpd.id.toString()
        );
        if (platIndex !== -1) {
          platToUpd.prix = parseFloat(platToUpd.prix);
          existingPlats[platIndex] = platToUpd;
          await updateDoc(docRef, { plats: existingPlats });
        }
        fetchData();
      }
    } catch (e) {
      console.error("Erreur lors du PUT : ", e);
    }
  };

  const delData = async (platToDel) => {
    try {
      const docRef = doc(platCollection, doc_id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const updatedPlats = docSnapshot
          .data()
          .plats.filter((p) => p.id !== platToDel.id);
        await updateDoc(docRef, { plats: updatedPlats });
      }
      fetchData();
    } catch (e) {
      console.error("Erreur lors du DELETE : ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, addData, updData, delData };
}
