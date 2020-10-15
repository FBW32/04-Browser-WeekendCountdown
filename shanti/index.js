const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let text = document.getElementById("text")
console.log(text);
let button = document.querySelector("button")
let inputField = document.getElementById("inputField")
inputField.onclick = () => {
    inputField.style.cssText = "outline: 1px solid aqua";
}

const countdown = () => {
    let name = document.querySelector("input").value
    let todaysDate = new Date().getDay()
    let todaysWeek = 6 - todaysDate
    let countdownText = todaysWeek > 1 ? `Only ${todaysWeek} days left untill weekend.` : "It's weekend."
   
    text.innerHTML = `Hello ${name}. Today is ${days[todaysDate]}. ${countdownText}.`
    
}
button.addEventListener("click", countdown)