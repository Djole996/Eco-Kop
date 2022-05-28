const btn = document.querySelector(".btn");
const form = document.querySelector(".user-form");

const datumPrijave = document.querySelector(".prijava");
const datumOdjave = document.querySelector(".odjava");
const brojOsoba = document.querySelector(".broj-osoba");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(brojOsoba.value, datumPrijave.value, datumOdjave.value);
});

/* document.addEventListener('DOMContentLoaded', function() {
                     var button = document.createElement('button');
                      button.type = 'button';
                         button.innerHTML = 'Datum prijavljivanja:';
                          button.className = 'btn-styled';
 
                             button.onclick = function Prijavljivanje() {

                                                         };
 
                        var container = document.getElementById('prijavljivanje');
                        container.appendChild(button);
                        }, false)

                            
                        document.addEventListener('DOMContentLoaded', function() {
                     var button = document.createElement('button');
                      button.type = 'button';
                         button.innerHTML = 'Datum odjavljivanja:';
                          button.className = 'btn-styled';
 
                             button.onclick = function Odjavljivanje() {

                                                         };
 
                        var container = document.getElementById('odjavljivanje');
                        container.appendChild(button);
                        }, false)


                        document.addEventListener('DOMContentLoaded', function() {
                     var button = document.createElement('button');
                      button.type = 'button';
                         button.innerHTML = 'Broj osoba:';
                          button.className = 'btn-styled';
 
                             button.onclick = function BrojOSoba() {

                                                         };
 
                        var container = document.getElementById('broj-osoba');
                        container.appendChild(button);
                        }, false)


                        document.addEventListener('DOMContentLoaded', function() {
                     var button = document.createElement('button');
                      button.type = 'button';
                         button.innerHTML = 'Trazi';
                          button.className = 'btn-styled';
 
                             button.onclick = function Trazi() {

                                                         };
 
                        var container = document.getElementById('container4');
                        container.appendChild(button);
                        }, false) */
