let weekDays = [
  "Monday",
  "Teusday",
  "Wendsday",
  "thirsday",
  "friday",
  "saturday",
  "sunday",
];
let button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let userName = document.getElementById("name").value;
  let greetingText = document.getElementById("greeting");
  let day = new Date();
  let dateNumber = day.getDay();
  let today = weekDays[dateNumber - 1];
  let remainDays = 6 - dateNumber;

  let greeting = (userName) => {
    return `Hello ${userName} , today is ${today} we have ${remainDays} days till weekend`;
  };
  greetingText.innerHTML = greeting(userName);
});
