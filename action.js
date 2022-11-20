

// date counting down to

const countDownDate = new Date("dec 25, 2022 16:40:25").getTime();


// update the countdown every seconds
let counting = setInterval(function(){
    
// todays date and time
const todayDate = new Date().getTime();

// distance between now and coundown date
let distance = countDownDate - todayDate;

// days hours minutes and second calculation
let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
let seconds = Math.floor((distance % (1000 * 60)) / (1000)); 

// setting the inner html to be their respective value
document.querySelector('#days').innerText=days;
document.querySelector('#hours').innerText=hours;
document.querySelector('#minutes').innerText=minutes;
document.querySelector('#seconds').innerText=seconds;


},1000)


