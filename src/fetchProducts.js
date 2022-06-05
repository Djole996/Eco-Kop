import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => {
    console.log(err);
  });
  if (response) {
    const data = await response.json();
    return data;
  }
  return data;
};

export default fetchProducts;
