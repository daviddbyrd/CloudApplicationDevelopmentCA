import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {
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

  return (
    data &&
    data.map((product) => {
      return (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          available={product.available}
        />
      );
    })
  );
}

export default ProductList;
