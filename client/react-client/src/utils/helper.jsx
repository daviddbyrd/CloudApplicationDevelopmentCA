export const ValidateProductData = ({ product }) => {
  const validKeys = {
    name: "string",
    description: "string",
    available: "boolean",
  };

  const productKeys = Object.keys(product);
  if (productKeys.length !== 4) {
    console.log(`1 ${productKeys}`);
    return false;
  }

  if (!("price" in product)) {
    return false;
  }

  // Need to insert Validation for Price to check if it is a number.

  for (const [key, type] of Object.entries(validKeys)) {
    if (!(key in product) || typeof product[key] !== type) {
      console.log(`2 ${productKeys}, ${key}`);
      return false;
    }
  }
  return true;
};
