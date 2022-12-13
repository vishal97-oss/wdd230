const PotatoapiURL = "https://www.commodities-api.com/api/latest?access_key=pqmrs4b2d108by9rudvmld8wjzqsg3te47hj8nc762ro6wakch5rhxlpml2d&base=USD&symbols=RICE";

const getApi = async () => {
    const response = await fetch(PotatoapiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    console.log(16*jsObject.data.rates.RICE);
    document.getElementById("API").textContent = Math.round(16*jsObject.data.rates.RICE);
}
getApi();

let documentItem = document.getElementById("lbs");
let usDelivery = document.getElementById("Delivery");
let usPickup = document.getElementById("Pickup");
console.log(usDelivery)

usDelivery.addEventListener("change", Calc);


function Calc(){
    let lbs = document.getElementById("lbs").value;
    answer = lbs * 2
    console.log(answer)
}


// let documentItem = document.getElementById('localstorage');
// let lbs = document.getElementById('lbs');


// if(localStorage.getItem('addtoCart')){
//     localStorage.setItem("addtoCart",lbs.value)
// }