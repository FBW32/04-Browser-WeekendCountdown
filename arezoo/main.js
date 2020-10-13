let weekDays = [
  "sunday",
  "Monday",
  "Teusday",
  "Wendsday",
  "thirsday",
  "friday",
  "saturday",
];
let button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let userName = document.getElementById("name").value;
  let greetingText = document.getElementById("greeting");
  let day = new Date();
  let dateNumber = day.getDay();
  console.log(dateNumber);
  let today;
  if (dateNumber != 0) {
    today = weekDays[dateNumber - 1];
  } else {
    today = weekDays[0];
  }
  let remainDays = 5 - dateNumber;
  let greeting = (userName) => {
    return `Hello ${userName} , today is ${today} we have ${remainDays} days till weekend`;
  };
  greetingText.innerHTML = greeting(userName);
});
