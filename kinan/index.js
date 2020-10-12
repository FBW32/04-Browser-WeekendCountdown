function countdown (){
   let  input = document.querySelector("input");
    let current_date = new Date();
    let days = ["sat","mo","tu","we","th","fr","sa"]
    let get_day = current_date.getDay();
    let current_day = days[get_day];
    let number_of_day = days.length-get_day;
    document.getElementById("text").innerHTML=`Hello ${input.value} today is ${current_day} and there is ${number_of_day} left to weekend `;
}

