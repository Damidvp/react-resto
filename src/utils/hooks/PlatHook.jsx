import { useEffect, useState } from "react";

export function useFetchPlatData(url = "") {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPlats() {
      const res = await fetch(url);
      try {
        if (res.ok) {
          const dataReceived = await res.json();
          if (dataReceived) {
            setData(dataReceived.plats);
          } else {
            console.error("Data not found");
          }
        }
      } catch (e) {
        console.error("Cannot get data");
      }
    }
    getPlats();
  }, [url]);

  return data;
}
