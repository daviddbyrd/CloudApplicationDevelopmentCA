import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await axios.get("http://localhost:3000/products", {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(fetchedData.data);
        setData(fetchedData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>{JSON.stringify(data)}</>;
}

export default App;
