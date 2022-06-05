// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");
///

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  const item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);

    //add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];

    //add item to the dom
    addToCartDOM(product);
  } else {
    //update items
    const updatedItems = updateItem(id);

    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const finishItems = items.map((item) => {
      if (item.dataset.id === id) {
        item.textContent = updatedItems;
      }
    });
  }
  //add one to the item count
  displayCartItemCount();
  //display car totlas
  displayCartTotal();

  //,mmore functions

  //add to the local storage
  setStorageItem("cart", cart);

  openCart();
};

// display cart count function
function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}
//display cart total function
function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);

  cartTotalDOM.textContent = `Total:${formatPrice(total)}`;
}

////
function displayCartItemsDom() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

///remove items
const removeArticle = (id) => {
  console.log(cart);
  cart = cart.filter((item) => item.id !== id);
};

///update items and increase items
const updateItem = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};
//decrease funcionality
const decreaseItem = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

///
function setupCartFunctionality() {
  cartItemsDOM.addEventListener("click", (e) => {
    const event = e.target;
    //remove
    if (event.classList.contains("cart-item-remove-btn")) {
      const currentArticle = event.parentElement.parentElement;
      const id = event.parentElement.parentElement.dataset.id;
      //
      console.log(id);
      removeArticle(id);
      currentArticle.remove();
    }

    //increase
    if (event.parentElement.classList.contains("cart-item-increase-btn")) {
      const currentElement = event.parentElement.parentElement.parentElement;
      const currentBtn = event.parentElement;

      const newAmount = updateItem(currentBtn.dataset.id);
      currentBtn.nextElementSibling.textContent = newAmount;
    }
    //decrease
    if (event.parentElement.classList.contains("cart-item-decrease-btn")) {
      const currentElement = event.parentElement.parentElement.parentElement;
      const currentBtn = event.parentElement;
      console.log(currentElement, currentBtn);

      const newAmount = decreaseItem(currentBtn.dataset.id);
      console.log(newAmount);
      if (newAmount === 0) {
        removeArticle(currentBtn.dataset.id);
        currentElement.remove();
      } else {
        currentBtn.previousElementSibling.textContent = newAmount;
      }
    }

    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

const init = () => {
  displayCartItemCount();
  displayCartTotal();

  ///
  displayCartItemsDom();
  ///
  setupCartFunctionality();
};

init();
