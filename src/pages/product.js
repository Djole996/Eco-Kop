// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
let productID;

// show product when page loads

window.addEventListener("DOMContentLoaded", async () => {
  const urlId = window.location.search;

  try {
    const response = await fetch(`${singleProductUrl}${urlId}`);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      const singleProduct = data.fields;
      const id = data.id;

      productID = id;

      const {
        colors,
        company,
        description: info,
        name,
        price,
        image,
      } = singleProduct;
      const img = image[0].url;

      //dom manipoulation
      document.title = `${name.toUpperCase()} | Store`;

      pageTitleDOM.textContent = `Home /${name}`;
      imgDOM.src = img;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = info;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `<div>
      <h3 class="error">
      Somethings went wrong.
      </h3>
      <a href="index.html" class="btn">Back Home</a>
      
      
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
  loading.style.display = "none";
});

cartBtn.addEventListener("click", (id) => {
  addToCart(productID);
});
