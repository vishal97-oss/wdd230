let requestURL = 'https://vishal97-oss.github.io/wdd230/week9/json/data.json'

async function getCompanies(requestURL){
    let response = await fetch(requestURL);
    console.log(response);
}

console.log("Hello World")