var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1 - 6 random no

var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png"; // dice1.png - dice2.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if (
    randomNumber1 > randomNumber2
) {
    document.querySelector("h2").textContent = "Player 1 Wins!"
    document.querySelectorAll("p")[0].classList.add("bg");
    document.querySelectorAll(".diceBg")[0].classList.add("bgColor");
    document.querySelectorAll(".diceBg")[0].classList.add("dicebgUp");
} else if (
    randomNumber2 > randomNumber1
) {
    document.querySelector("h2").textContent = "Player 2 Wins!"
    document.querySelectorAll("p")[1].classList.add("bg");
    document.querySelectorAll(".diceBg")[1].classList.add("bgColor");
    document.querySelectorAll(".diceBg")[1].classList.add("dicebgUp");
} else {
    document.querySelector("h2").textContent = "Draw!"
    document.querySelectorAll("p")[0].classList.add("bg");
    document.querySelectorAll("p")[1].classList.add("bg");
    document.querySelectorAll(".diceBg")[0].classList.add("bgColor");
    document.querySelectorAll(".diceBg")[1].classList.add("bgColor");
    document.querySelectorAll(".diceBg")[0].classList.add("dicebgUp");
    document.querySelectorAll(".diceBg")[1].classList.add("dicebgUp");
}

function refreshPage() {
    location.href = location.href;
    var image = document.querySelectorAll("#myImage")[0];
    var imageRo = document.querySelectorAll("#myImage")[1];
    image.classList.add("rotate");
    imageRo.classList.add("rotate");
}