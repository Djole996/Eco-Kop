import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value:$${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value:$${value}`;

    //setup funkcionality
    let newStore = store.filter((item) => {
      return item.price / 100 <= value;
    });
    console.log(newStore);
    display(newStore, getElement(".products-container"), true);
    if (newStore.length < 1) {
      getElement(
        ".products-container"
      ).innerHTML = `<h5 class="filter-error">Sorry there is no product match Your search.</h5>`;
    }
  });
};

export default setupPrice;
