import React from "react";

const Product = ({ name, description, price, available }) => {
  return (
    <>
      <h1>{name}</h1>
      <h1>{description}</h1>
      <h1>{price}</h1>
      <h1>{available}</h1>
    </>
  );
};

export default Product;
