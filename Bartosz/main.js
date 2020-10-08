let body = document.querySelector('body');
body.style.fontFamily = 'Helvetica'
body.style.margin = '1rem'
body.style.padding = '1rem'

let welcome = document.querySelector('h1');
welcome.innerHTML = 'Welcome to Weekend Countdown!!'

let message = document.querySelector('p');
message.innerHTML = 'Please enter your name:'

let button = document.querySelector('#goButton');

let date = new Date();

getDayName = () => {
  return date.toLocaleDateString('en-EN', { weekday: 'long' });
}

getDaysToWeekend = () => {

  let userName = document.querySelector('#name');
  let answer = document.querySelector('#answer');

  answer.innerHTML = `Hello ${userName.value}. Today is ${getDayName()}, only ${5 - date.getDay()} days left until next weekend!`;

  
  
};

button.addEventListener("click", getDaysToWeekend)