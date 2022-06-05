import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  const newCompany = store.map((item) => {
    const company = item.company;

    return company;
  });

  const newSet = new Set(newCompany);

  const companies = Array.from(newSet);
  companies.unshift(`all`);
  const btnContainer = getElement(".companies");
  const newButtons = companies
    .map((item) => {
      return `<button class="company-btn">${item}</button>`;
    })
    .join("");

  btnContainer.innerHTML = newButtons;

  const buttons = document.querySelectorAll(".company-btn");

  btnContainer.addEventListener("click", function (e) {
    const element = e.target;

    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
        console.log(newStore);
      } else {
        newStore = store.filter((item) => {
          return element.textContent === item.company;
        });
        console.log(newStore);
      }
      display(newStore, getElement(".products-container"), true);
    }
    getElement(".search-input").value = "";
  });
};

export default setupCompanies;
