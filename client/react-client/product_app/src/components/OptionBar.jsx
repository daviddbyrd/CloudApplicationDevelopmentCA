import React from "react";

const OptionBar = () => {
  return (
    <div className="flex flex-row w-6/10">
      <div className="w-5/10 text-center border-2 border-solid">View</div>
      <button className="w-5/10 text-center border-2 border-solid">
        Create New Product
      </button>
    </div>
  );
};

export default OptionBar;
