// select the elements to manipulate (output to)
const datefieldUK = document.querySelector(".date"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;







let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);


let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector("h2#currentdate").textContent = "Last updated: " + currentdate

// Hamburger Menu

let Ham = document.querySelector('.HMB');
let Nav = document.querySelector('nav');

Ham.addEventListener('click', () => {Nav.classList.toggle ('happen')} );
