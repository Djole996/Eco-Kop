///galerija
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});

/* slider */
//import { appFirebase, database } from "./firebaseConfig.js";
//import { collection, addDoc } from "/firebase/firestore";

//const collectionRef = collection(database, "users");

const firebaseApp = firebase.initializeApp({
  //Your own Firebase Credentials..
  apiKey: "AIzaSyC92RMj18iSPLQVgx6Z6Q1ahbZJybeM5Zs",
  authDomain: "eco-kop-project.firebaseapp.com",
  projectId: "eco-kop-project",
  storageBucket: "eco-kop-project.appspot.com",
  messagingSenderId: "464556483761",
  appId: "1:464556483761:web:1f2c90f7422a7297fc6e90",
  measurementId: "G-0328GZ0HYB",
});

const db = firebaseApp.firestore();

const form = document.getElementById("online");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("ime").value;
  const lastName = document.getElementById("prezime").value;
  const email = document.getElementById("email").value;
  const firstDay = document.getElementById("prijava").value;
  const lastDay = document.getElementById("odjava").value;
  const persons = document.getElementById("brojOsoba").value;
  const phone = document.getElementById("brojTelefona").value;

  let firstDays = [];
  let lastDays = [];
  //read data
  db.collection("users")
    .get()
    .then((data) => {
      const items = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });

      //for first dates
      firstDays = items.map((item) => {
        return item.firstDay;
      });
      console.log(firstDays);

      firstDays.map((item) => {
        if (item === firstDay) {
          console.log(item);
          alert("datum je rezervisan,molimo izaberite drugi datum");
          return;
        }
      });
      db.collection("users")
        .add({
          name: firstName,
          lastName: lastName,
          email: email,
          firstDay: firstDay,
          lastDay: lastDay,
          persons: persons,
          phone: phone,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    });

  //create date
});

//if (firstName && lastName && email && firstDay && lastDay && persons && phone) {
//firebase implementation
/* const data = {
  name: firstName,
  lastName: lastName,
  email: email,
  firstDay: firstDay,
  lastDay: lastDay,
  persons: persons,
  phone: phone,
}; */
