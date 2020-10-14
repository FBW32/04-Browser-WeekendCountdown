let h = document.querySelector("h1")
h.style.cssText = "margin: 0 auto; width:30%"

let p = document.querySelector("p")
p.style.cssText="width:500px;margin:0 auto;padding: 10px"


let form = document.querySelector("form")
form.style.cssText="width:500px;margin:0 auto;"


let typeField = document.getElementById("typeField")

typeField.onclick = () => {
    typeField.style.cssText = "outline:1px solid cyan;"
}

let inp = document.querySelector("input")


form.addEventListener("submit", (e) => {
  e.preventDefault()

let d = new Date();
let weekday = [];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[d.getDay()];

function daysLeft(){
    if (day === "Monday") {return 5 }
    if (day === "Tuesday") {return 4}
    if (day === "Wednesday") {return 3 }
    if (day === "Thursday") {return 2  }
    if (day === "Friday") {console.log("Happy days: tomorrow is weekend") }
    else {
        console.log("It is already weekend");
    }
}
let n = daysLeft();

let text = document.createElement("p");

p.innerHTML="Hallo " + inp.value + ". Today is " +  day + ". Only " + n + " days left until Weekend!"

inp.value=""
})