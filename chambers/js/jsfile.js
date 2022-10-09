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
