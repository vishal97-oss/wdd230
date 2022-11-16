let requestURL = 'https://vishal97-oss.github.io/wdd230/week9/json/data.json'



async function getCompanies(requestURL){
    let response = await fetch(requestURL);
    console.log(response);
    const jsObject = await response.json();
    console.log(jsObject)
    const companies = jsObject["Companies"];
    console.log(companies[0].companyname)
    companies. forEach(displayCompanies)
    

}
getCompanies(requestURL);
// document.querySelector("#list").addEventListener("click", showTable);

// document.querySelector("#grid").addEventListener("click", showGrid);

function displayCompanies(item) {
    let card = document.createElement('section');
    let companyname = document.createElement('p')
    let address = document.createElement('p')
    let phonenumber = document.createElement(p)
    let logo = document.createElement('img')
    let website = document.createElement('p')

    companyname.textContent = item.companyname
    logo.setAttribute('src', item.website);


}