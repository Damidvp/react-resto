import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export function useFetchPlatData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const platCollection = collection(database, "plats");
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
      const platCollection = collection(database, "plats");
      const docRef = await addDoc(platCollection, platToAdd);
      platToAdd.id = docRef.id;
      setData((prevData) => [...prevData, platToAdd]);
    } catch (e) {
      console.error("Erreur lors du POST : ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, addData };
}
