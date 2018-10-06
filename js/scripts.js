// let loginForm = document.forms.login;
// console.log(document.forms, loginForm);
// let emailInput = loginForm.email;



// let userInputName1= prompt("Hello player 1, enter your gamerTag");
// let userInputName2= prompt("Player 2, enter your gamerTag");


let body = document.querySelectorAll("li")[1]; //Search for the first tag that has <body> and insert it into variable body
console.log(body);

// body.innerHTML="lala";
// body.insertBefore(userInputName1, li)

// document.querySelectorAll("li")[1].innerHTML=userInputName1;


rowF=[0,0,0,0,0,0,0];
rowE=[0,0,0,0,0,0,0];
rowD=[0,0,0,0,0,0,0];
rowC=[0,0,0,0,0,0,0];
rowB=[0,0,0,0,0,0,0];
rowA=[0,0,0,0,0,0,0];

//Lets use these to hold how many chips in a column,
//itwill let us know if full, used in functions
counter1=0;
counter2=0;
counter3=0;
counter4=0;
counter5=0;
counter6=0;


// document.getElementById("column1").addEventListener("dblclick", sendToGrave1);
// Use this to console log all rows
function displayALL(){
  e.preventDefault();
  console.log(rowA);
  console.log(rowB);
  console.log(rowC);
  console.log(rowD);
  console.log(rowE);
  console.log(rowF);
};

alert("player one please drop chip")












// ,B1,C1,D1,E1,F1
document.getElementById("A1").addEventListener("click", dropChip1);
document.getElementById("B1").addEventListener("click", dropChip1);
document.getElementById("C1").addEventListener("click", dropChip1);
document.getElementById("D1").addEventListener("click", dropChip1);
document.getElementById("E1").addEventListener("click", dropChip1);
document.getElementById("F1").addEventListener("click", dropChip1);

function dropChip1(e){
  e.preventDefault();
  //cascading use lowest row possible
  if (rowA[0]== 0){
      console.log();
  }else if (rowB[0]==0) {
    console.log();
  }else if (rowC[0]) {
    console.log();
  }else if (rowD[0]) {
    console.log();
  }else if (rowE[0]) {
    console.log();
  } else if (rowF[0]) {
    console.log();
  } else{}

  }

//   if (counter1>=6){
//     alert("This column id full, try again")
//   }else{
//   alert("drop chip entered1");
//   var node= document.createElement("DIV");
//   node.setAttribute("class", "red");
//
//   console.log(node);
// }

}

document.getElementById("A2").addEventListener("click", dropChip2);
document.getElementById("B2").addEventListener("click", dropChip2);
document.getElementById("C2").addEventListener("click", dropChip2);
document.getElementById("D2").addEventListener("click", dropChip2);
document.getElementById("E2").addEventListener("click", dropChip2);
document.getElementById("F2").addEventListener("click", dropChip2);

function dropChip2(e){
  e.preventDefault();
  alert("drop chip entered2");
}

document.getElementById("A3").addEventListener("click", dropChip3);
document.getElementById("B3").addEventListener("click", dropChip3);
document.getElementById("C3").addEventListener("click", dropChip3);
document.getElementById("D3").addEventListener("click", dropChip3);
document.getElementById("E3").addEventListener("click", dropChip3);
document.getElementById("F3").addEventListener("click", dropChip3);

function dropChip3(e){
  e.preventDefault();
  alert("drop chip entered3");
}

document.getElementById("A4").addEventListener("click", dropChip4);
document.getElementById("B4").addEventListener("click", dropChip4);
document.getElementById("C4").addEventListener("click", dropChip4);
document.getElementById("D4").addEventListener("click", dropChip4);
document.getElementById("E4").addEventListener("click", dropChip4);
document.getElementById("F4").addEventListener("click", dropChip4);

function dropChip4(e){
  e.preventDefault();
  alert("drop chip entered4");
}

document.getElementById("A5").addEventListener("click", dropChip5);
document.getElementById("B5").addEventListener("click", dropChip5);
document.getElementById("C5").addEventListener("click", dropChip5);
document.getElementById("D5").addEventListener("click", dropChip5);
document.getElementById("E5").addEventListener("click", dropChip5);
document.getElementById("F5").addEventListener("click", dropChip5);

function dropChip5(e){
  e.preventDefault();
  alert("drop chip entered5");
}

document.getElementById("A6").addEventListener("click", dropChip6);
document.getElementById("B6").addEventListener("click", dropChip6);
document.getElementById("C6").addEventListener("click", dropChip6);
document.getElementById("D6").addEventListener("click", dropChip6);
document.getElementById("E6").addEventListener("click", dropChip6);
document.getElementById("F6").addEventListener("click", dropChip6);

function dropChip6(e){
  e.preventDefault();
  alert("drop chip entered6");
}

document.getElementById("A7").addEventListener("click", dropChip7);
document.getElementById("B7").addEventListener("click", dropChip7);
document.getElementById("C7").addEventListener("click", dropChip7);
document.getElementById("D7").addEventListener("click", dropChip7);
document.getElementById("E7").addEventListener("click", dropChip7);
document.getElementById("F7").addEventListener("click", dropChip7);

function dropChip7(e){
  e.preventDefault();
  alert("drop chip entered7");
}
