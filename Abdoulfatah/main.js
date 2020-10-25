
const form = document.getElementById("form");
const input = document.getElementById("userName");
const label = document.getElementById("query");

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();

form.addEventListener("submit",function(event){
    event.preventDefault();

    let today= weekDays[d.getDay()]
    if(today=== "Sunday" || today=== "Saturday"){
        label.innerHTML= `Hello ${input.value}, today is ${today} it's already weekend!`;

    } else {
        let x = d.getDay()
        let daysLeft = weekDays.length-2-(x)
        label.innerHTML= `Hello ${input.value}, today is ${today}, only ${daysLeft} days left till the weekend!`;

    }
        input.value= "";
})
