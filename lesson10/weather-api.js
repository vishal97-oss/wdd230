const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=dc4e85ace3f34cc166fe458fc5cb2f18";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();