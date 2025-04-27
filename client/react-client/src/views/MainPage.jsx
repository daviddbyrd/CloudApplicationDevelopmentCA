import { React, useState } from "react";
import ProductList from "../components/ProductList";

const MainPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-200">
      <ProductList />
    </div>
  );
};

export default MainPage;
