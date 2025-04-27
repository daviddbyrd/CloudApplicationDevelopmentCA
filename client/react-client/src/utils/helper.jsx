export const ValidateProductData = ({ product }) => {
  const validKeys = ["name", "description", "price", "available"];

  const productKeys = Object.keys(product);
  if (productKeys.length !== 4) {
    return false;
  }

  for (const key of validKeys) {
    if (!(key in product)) {
      return false;
    }
  }
  return true;
};
