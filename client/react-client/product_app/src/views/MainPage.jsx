import React from "react";
import ProductList from "../components/ProductList";
import OptionBar from "../components/OptionBar";

const MainPage = () => {
  return (
    <div className="size-full flex flex-col justify-center items-center mt-20">
      <OptionBar />
      <ProductList />
    </div>
  );
};

export default MainPage;
