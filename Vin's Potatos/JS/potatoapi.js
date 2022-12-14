const PotatoapiURL = "https://www.commodities-api.com/api/latest?access_key=pqmrs4b2d108by9rudvmld8wjzqsg3te47hj8nc762ro6wakch5rhxlpml2d&base=USD&symbols=RICE";

const getApi = async () => {
    const response = await fetch(PotatoapiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    console.log(16*jsObject.data.rates.RICE);
    document.getElementById("API").textContent = Math.round(16*jsObject.data.rates.RICE);
}
getApi();

let usCalculation = document.getElementById('usCalc');
let fzCalculation = document.getElementById('fzCalc');
let deCalculation = document.getElementById('deCalc');


let usDelivery = document.getElementById('usDelivery');
let usPickup = document.getElementById('usPickup');

let fzDelivery = document.getElementById('fzDelivery');
let fzPickup = document.getElementById('fzPickup');

let deDelivery = document.getElementById('deDelivery');
let dePickup = document.getElementById('dePickup');



usDelivery.addEventListener('focusin', calc);
usPickup.addEventListener('focusin', calc);

fzDelivery.addEventListener('focusin', calc);
fzPickup.addEventListener('focusin', calc);

deDelivery.addEventListener('focusin', calc);
dePickup.addEventListener('focusin', calc);


function calc(){
    let uslbs = document.getElementById('uslbs').value;
    let fzlbs = document.getElementById('fzlbs').value;
    let delbs = document.getElementById('delbs').value;

    let usStorage = document.getElementById('usStorage');
    let fzStorage = document.getElementById('fzStorage');
    let deStorage = document.getElementById('deStorage');
   
    let usCalc = (uslbs * .95).toFixed(2);
    usCalculation.textContent = usCalc;

    let fzCalc = (fzlbs * .65).toFixed(2);
    fzCalculation.textContent = fzCalc

    let deCalc = (delbs * .45).toFixed(2);
    deCalculation.textContent = deCalc;

    usStorage.addEventListener('click', function(){
        localStorage.setItem('uslbs', usCalc);
    });
    fzStorage.addEventListener('click', function(){
        localStorage.setItem('fzlbs', fzCalc);
    });
    deStorage.addEventListener('click', function(){
        localStorage.setItem('delbs', deCalc);
    });
   
}




// let documentItem = document.getElementById("lbs");
// let usDelivery = document.getElementById("Delivery");
// let usPickup = document.getElementById("Pickup");
// console.log(usDelivery)

// usDelivery.addEventListener("change", Calc);


// function Calc(){
//     let lbs = document.getElementById("lbs").value;
//     answer = lbs * 2
//     console.log(answer)
// }


// let documentItem = document.getElementById('localstorage');
// let lbs = document.getElementById('lbs');


// if(localStorage.getItem('addtoCart')){
//     localStorage.setItem("addtoCart",lbs.value)
// }