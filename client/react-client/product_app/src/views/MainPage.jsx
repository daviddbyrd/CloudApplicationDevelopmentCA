import { React, useState } from "react";
import ProductList from "../components/ProductList";
import OptionBar from "../components/OptionBar";

const MainPage = () => {
  const [viewBy, setViewBy] = useState("all");

  return (
    <div className="size-full flex flex-col justify-center items-center mt-20">
      <OptionBar
        handleChangeView={(newView) => setViewBy(newView)}
        viewBy={viewBy}
      />
      <ProductList viewBy={viewBy} />
    </div>
  );
};

export default MainPage;
