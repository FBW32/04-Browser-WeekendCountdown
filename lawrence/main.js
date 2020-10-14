
let hd = document.querySelector("h1")
let question = document.querySelector("p")
question.innerHTML=" please enter your Name"

let form = document.querySelector("form")

let input = document.querySelector("#input")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let date = new Date()
    let datLth = 5 - date.getDay()
    console.log(datLth);

    let day = date.toLocaleDateString("en-EN",{weekday: "long"})

   input.innerHTML =input.value
   question.innerText = `hello ${input.value} Today is ${day} Only ${datLth} days left until weekend`
   
})


