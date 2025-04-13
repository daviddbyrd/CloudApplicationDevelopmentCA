export const ValidateProductData = ({ product }) => {
  const validKeys = {
    name: "string",
    description: "string",
    price: "number",
    available: "boolean",
  };

  const productKeys = Object.keys(product);
  if (productKeys.length !== validKeys.length) {
    return false;
  }

  for (const key of validKeys) {
    if (!(key in productKeys) || validKeys[key] !== typeof productKeys[key]) {
      return false;
    }
  }
  return true;
};
