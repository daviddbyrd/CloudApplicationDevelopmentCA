import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import OptionBar from "./OptionBar";
import { ValidateProductData } from "../utils/helper";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [viewBy, setViewBy] = useState("all");

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
      await axios.delete(`http://localhost:3000/products/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
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

  const createNewProduct = async ({ newProduct }) => {
    if (!ValidateProductData({ product: newProduct })) {
      return;
    }
    try {
      await axios.post("http://localhost:3000/products", newProduct, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col py-20 items-center">
      <OptionBar
        handleChangeView={(newView) => setViewBy(newView)}
        viewBy={viewBy}
        createNewProduct={createNewProduct}
      />
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
                viewBy={viewBy}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
