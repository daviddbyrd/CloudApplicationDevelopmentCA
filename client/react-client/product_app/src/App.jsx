import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = axios.get("http://localhost:3000/products");
        console.log(fetchedData);
        setData(JSON.stringify(fetchedData));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>{data}</>;
}

export default App;
