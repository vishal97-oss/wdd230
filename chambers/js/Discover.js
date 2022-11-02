let documentItem = document.getElementById('localstorage')

if(localStorage.getItem('lastVisit')) {
    // Get value from Local Storage
    let previousDate = localStorage.getItem('lastVisit')
    // Get todays date
    let date = Date.now();
    // Subtract the variables
    let subtractResult = date - previousDate
    let finalValue = subtractResult/1000/60/60/24;
    documentItem.innerHTML = Math.round(finalValue);
}
else{
    localStorage.setItem('lastVisit', Date.now());
    let status = localStorage.getItem('lastVisit');
    documentItem.innerHTML = status;
}




const image = document.querySelectorAll('img');



const pimages = document.querySelectorAll('[data-src]')
const options = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        
        entries.forEach(entry => {
            // console.log(entries);
            if (!entry.isIntersecting){
                return;
            }
            else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
            
        // console.log(entries);
        // console.log(io);
    }, options);
    

image.forEach(image => {
    io.observe(image);
})