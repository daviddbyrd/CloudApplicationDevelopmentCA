import { React, useState } from "react";
import ProductList from "../components/ProductList";

const MainPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-200">
      <ProductList />
    </div>
  );
};

export default MainPage;
