import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    try {
      const fetchedData = await axios.get("http://localhost:3000/products", {
        headers: {
          Accept: "application/json",
        },
      });
      setProducts(fetchedData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveEdit = async ({ id, updatedProduct }) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, updatedProduct, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }

    setEditId(null);
  };

  return (
    <div className="w-6/10 grid grid-cols-1 gap-10">
      {products &&
        products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              available={product.available}
              isEditing={product.id == editId}
              onEdit={() => setEditId(product.id)}
              onCancel={() => setEditId(null)}
              onSaveEdit={handleSaveEdit}
              deleteProduct={deleteProduct}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
