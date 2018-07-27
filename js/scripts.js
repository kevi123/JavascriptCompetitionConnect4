// let loginForm = document.forms.login;
// console.log(document.forms, loginForm);
// let emailInput = loginForm.email;



let userInputName1= prompt("Hello player 1, enter your gamerTag");
let userInputName2= prompt("Player 2, enter your gamerTag");


let body = document.querySelectorAll("li")[1]; //Search for the first tag that has <body> and insert it into variable body
console.log(body);

body.innerHTML="lala";
body.insertBefore(userInputName1, li)

// document.querySelectorAll("li")[1].innerHTML=userInputName1;
