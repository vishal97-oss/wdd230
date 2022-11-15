let requestURL = 'https://vishal97-oss.github.io/wdd230/week9/json/data.json'



async function getCompanies(requestURL){
    let response = await fetch(requestURL);
    console.log(response);
    const jsObject = await response.json();
    console.log(jsObject)
    const companies = jsObject["Companies"];
    console.log(companies[0].companyname)
    

}
getCompanies(requestURL);
// document.querySelector("#list").addEventListener("click", showTable);

// document.querySelector("#grid").addEventListener("click", showGrid);

