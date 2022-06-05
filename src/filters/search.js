import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import { store } from "../store.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");

  const nameInput = getElement(".search-input");

  form.addEventListener("keyup", () => {
    const value = nameInput.value;
    const container = getElement(".products-container");

    const newStore = store.filter((product) => {
      let { name } = product;
      name = name.toLowerCase();

      return name.startsWith(value.toLowerCase());
    });
    if (newStore) {
      display(newStore, container, true);
    }

    if (newStore.length < 1) {
      container.innerHTML = `<h3>Sorry,there is no product with that name</h3>`;
    }
  });
};

export default setupSearch;
