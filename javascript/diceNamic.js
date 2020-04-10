// jshint esversion: 7

let sum = 0;
let roll = 0;
var dice1 = Math.floor((Math.random() * 6) + 1);
var dice2 = Math.floor((Math.random() * 6) + 1);

document.getElementById("image1").src = "images/die" + dice1 + ".gif";
document.getElementById("image2").src = "images/die" + dice2 + ".gif";

function controller(){
    roll += 1;
    sum = parseInt(document.getElementById("input-box").value);
    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);

    document.getElementById("image1").src = "images/die" + dice1 + ".gif";
    document.getElementById("image2").src = "images/die" + dice2 + ".gif";
    document.getElementById("output-box").innerText = "";
    if(dice1 + dice2 == sum){
        document.getElementById("output-box").innerText = "You hit your number in " + roll + " rolls!";
        roll = 0;
    }
}

//button
window.addEventListener("load", function() {
  let button = document.querySelector("button");
  button.addEventListener("click", controller);
});
