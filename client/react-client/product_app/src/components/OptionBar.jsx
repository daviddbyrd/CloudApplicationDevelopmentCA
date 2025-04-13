import { React, useState } from "react";

const OptionBar = ({ handleChangeView, viewBy }) => {
  return (
    <div className="flex flex-row w-6/10">
      <div className="w-5/10 text-center border-2 border-solid">
        <select
          value={viewBy}
          onChange={(e) => handleChangeView(e.target.value)}
        >
          <option value="all">See all products</option>
          <option value="available">Show only available products</option>
          <option value="unavailable">Show only unavailable products</option>
        </select>
      </div>
      <button className="w-5/10 text-center border-2 border-solid">
        Create New Product
      </button>
    </div>
  );
};

export default OptionBar;
