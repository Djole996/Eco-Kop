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

const firstDay1 = document.getElementById("prijava").value;
const lastDay1 = document.getElementById("odjava").value;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("ime").value;
  const lastName = document.getElementById("prezime").value;
  const email = document.getElementById("email").value;
  const firstDay = document.getElementById("prijava").value;
  const lastDay = document.getElementById("odjava").value;
  const persons = document.getElementById("brojOsoba").value;
  const phone = document.getElementById("brojTelefona").value;
  const modal = document.querySelector(".modal-overlay");

  console.log(firstDay);
  console.log(lastDay);

  const modalText = document.querySelector(".modal-text");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
  });
  const allDays = [
    "2022-08-01",
    "2022-08-02",
    "2022-08-03",
    "2022-08-04",
    "2022-08-05",
    "2022-08-06",
    "2022-08-07",
    "2022-08-08",
    "2022-08-09",
    "2022-08-10",
    "2022-08-11",
    "2022-08-12",
    "2022-08-13",
    "2022-08-14",
    "2022-08-15",
    "2022-08-16",
    "2022-08-17",
    "2022-08-18",
    "2022-08-19",
    "2022-08-20",
    "2022-08-21",
    "2022-08-22",
    "2022-08-23",
    "2022-08-24",
    "2022-08-25",
    "2022-08-26",
    "2022-08-27",
    "2022-08-28",
    "2022-08-29",
    "2022-08-30",
    "2022-08-31",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04",
    "2022-09-05",
    "2022-09-06",
    "2022-09-07",
    "2022-09-08",
    "2022-09-09",
    "2022-09-10",
    "2022-09-11",
    "2022-09-12",
    "2022-09-13",
    "2022-09-14",
    "2022-09-15",
    "2022-09-16",
    "2022-09-17",
    "2022-09-18",
    "2022-09-19",
    "2022-09-20",
    "2022-09-21",
    "2022-09-22",
    "2022-09-23",
    "2022-09-24",
    "2022-09-25",
    "2022-09-26",
    "2022-09-27",
    "2022-09-28",
    "2022-09-29",
    "2022-09-30",
  ];

  let indexFirst = allDays.indexOf(firstDay);

  let indexLast = allDays.indexOf(lastDay);

  let reservationDays = allDays.slice(indexFirst, indexLast + 1);

  console.log(reservationDays);

  //read data
  db.collection("users")
    .get()
    .then((data) => {
      const items = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });

      const takenDays = items.map((item) => {
        const day = item.days.map((day) => {
          return day;
        });
        return day;
      });

      var merged = [].concat.apply([], takenDays);

      console.log(merged);

      const filteredDays = merged.includes(...reservationDays);

      const a = [1, 2, 3];
      const b = [1, 2, 3, 4, 5];

      const freeDays = allDays.filter((e) => !merged.includes(e));
      const finalFreeDays = freeDays.join(" // ");

      console.log("free days is : " + finalFreeDays);

      if (firstDay > lastDay) {
        modal.classList.add("open-modal");
        modalText.style.color = "lightPink";
        modalText.innerHTML =
          "Datum odjave ne moze biti ispred datuma prijave!";

        return;
      } else if (filteredDays) {
        modalText.innerHTML = `<h2> Datum je rezervisan!</h2> <p> Slobodni su sledeci datumi: ${finalFreeDays} </p>`;

        modal.classList.add("open-modal");
      } else if (
        firstName &&
        lastName &&
        email &&
        firstDay &&
        lastDay &&
        persons &&
        phone
      ) {
        db.collection("users")
          .add({
            name: firstName,
            lastName: lastName,
            email: email,
            firstDay: firstDay,
            lastDay: lastDay,
            persons: persons,
            phone: phone,
            days: reservationDays,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

        modal.classList.add("open-modal");
        modalText.style.color = "lightGreen";
        modalText.innerHTML = "Vasa rezervacija je uspesno poslata.";
      } else {
        modal.classList.add("open-modal");
        modalText.style.color = "pink";
      }
    });
});
