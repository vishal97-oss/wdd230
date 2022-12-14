let usPrice = document.getElementById('usPrice');
let dePrice = document.getElementById('dePrice');
let fzPrice = document.getElementById('fzPrice');

let uslbs = localStorage.getItem('uslbs');
let fzlbs = localStorage.getItem('fzlbs');
let delbs = localStorage.getItem('delbs');

usPrice.textContent = uslbs;
dePrice.textContent = delbs;
fzPrice.textContent = fzlbs;