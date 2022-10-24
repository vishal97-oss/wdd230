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


let day = now.getDay(); {
    if (day == 1 || day == 2) {
        document.querySelector("#RenDate").style.display="block";
    }
}

let temp = document.getElementById('t').textContent; 
let windspeed = document.getElementById('speed').textContent; 

if(temp < 50 && windspeed > 3) {
    let WindChill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    document.getElementById("WC").textContent = WindChill;
}




// const day = document.getElementById("RenDate"); // specific for id selection


// function Date() {
//     if day.value == "Wednesday" {

//     }
// }

