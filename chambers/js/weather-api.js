let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=dc4e85ace3f34cc166fe458fc5cb2f18";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject)

    
document.querySelector('#t').textContent = ((jsObject.main.temp - 273.15)*1.8 + 32).toFixed(2);
const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
console.log(iconsrc);

document.querySelector('#speed'). textContent = jsObject.wind.speed;
document.querySelector('#icon2').setAttribute('src', iconsrc);
document.querySelector('#icon2').setAttribute('alt', desc);
document.querySelector('#description'). textContent = desc;

}
getWeather(); 


