/* modal */
// Open the Modal
const openModal = () => {
  document.getElementById("myModal").style.display = "block";
};

// Close the Modal
const closeModal = () => {
  document.getElementById("myModal").style.display = "none";
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

/* fire base and reservation application */

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

const date1 = new Date();
const currentDate1 = date1.toISOString().split("T")[0];

const prijava = document.getElementById("prijava");

prijava.setAttribute("min", currentDate1);

const odjava = document.getElementById("odjava");

odjava.setAttribute("min", currentDate1);

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
    "2022-10-01",
    "2022-10-02",
    "2022-10-03",
    "2022-10-04",
    "2022-10-05",
    "2022-10-06",
    "2022-10-07",
    "2022-10-08",
    "2022-10-09",
    "2022-10-10",
    "2022-10-11",
    "2022-10-12",
    "2022-10-13",
    "2022-10-14",
    "2022-10-15",
    "2022-10-16",
    "2022-10-17",
    "2022-10-18",
    "2022-10-19",
    "2022-10-20",
    "2022-10-21",
    "2022-10-22",
    "2022-10-23",
    "2022-10-24",
    "2022-10-25",
    "2022-10-26",
    "2022-10-27",
    "2022-10-28",
    "2022-10-29",
    "2022-10-30",
    "2022-10-31",
    "2022-11-01",
    "2022-11-02",
    "2022-11-03",
    "2022-11-04",
    "2022-11-05",
    "2022-11-06",
    "2022-11-07",
    "2022-11-08",
    "2022-11-09",
    "2022-11-10",
    "2022-11-11",
    "2022-11-12",
    "2022-11-13",
    "2022-11-14",
    "2022-11-15",
    "2022-11-16",
    "2022-11-17",
    "2022-11-18",
    "2022-11-19",
    "2022-11-20",
    "2022-11-21",
    "2022-11-22",
    "2022-11-23",
    "2022-11-24",
    "2022-11-25",
    "2022-11-26",
    "2022-11-27",
    "2022-11-28",
    "2022-11-29",
    "2022-11-30",
    "2022-12-01",
    "2022-12-02",
    "2022-12-03",
    "2022-12-04",
    "2022-12-05",
    "2022-12-06",
    "2022-12-07",
    "2022-12-08",
    "2022-12-09",
    "2022-12-10",
    "2022-12-11",
    "2022-12-12",
    "2022-12-13",
    "2022-12-14",
    "2022-12-15",
    "2022-12-16",
    "2022-12-17",
    "2022-12-18",
    "2022-12-19",
    "2022-12-20",
    "2022-12-21",
    "2022-12-22",
    "2022-12-23",
    "2022-12-24",
    "2022-12-25",
    "2022-12-26",
    "2022-12-27",
    "2022-12-28",
    "2022-12-29",
    "2022-12-30",
    "2022-12-31",
  ];

  let indexFirst = allDays.indexOf(firstDay);

  let indexLast = allDays.indexOf(lastDay);

  let reservationDays = allDays.slice(indexFirst, indexLast + 1);

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

      const filteredDays = merged.includes(...reservationDays);
      const freeDays = allDays.filter((e) => !merged.includes(e));

      let newFree = freeDays.filter((item) => {
        return item >= currentDate1;
      });

      const finalFreeDays = newFree.join(" // ");

      const final = newFree
        .map((day) => {
          return `<div><p class='day'>${day}</p></div>`;
        })
        .join("");

      const date = new Date();
      const currentDate = date.toISOString().split("T")[0];

      if (firstDay > lastDay) {
        modal.classList.add("open-modal");
        modalText.style.color = "lightPink";
        modalText.innerHTML =
          "Datum odjave ne može biti ispred datuma prijave!";

        return;
      } else if (filteredDays) {
        modalText.innerHTML = `<h2 class='modal-title'> Nažalost, termin koji ste odabrali je već rezervisan.</h2> <p class='title-p'> U narednom periodu slobodni su sledeći datumi:</p>  <div class='dayContainer'>${final}</div> `;

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
        if (currentDate > firstDay) {
          modal.classList.add("open-modal");
          modalText.style.color = "lightPink";
          modalText.innerHTML =
            "Datum prijave ne može biti ispred trenutnog datuma!";

          return;
        } else {
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
          modalText.innerHTML =
            "Vasa rezervacija je uspešno primljena. Uskoro će Vas kontaktirati neko od članova našeg tima. ";
        }
      } else {
        modal.classList.add("open-modal");
        modalText.style.color = "pink";
      }
    });
});
