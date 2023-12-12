var randomValue1 = Math.floor(Math.random() * 5) + 1; //number from 1 to 6
var randomValue2 = Math.floor(Math.random() * 5) + 1; //number from 1 to 6

var playerOneImage = "dice" + randomValue1 + ".png";
var playerTwoImage = `dice${randomValue2}.png`;

document.getElementsByClassName("img1")[0].src = "./images/" + playerOneImage;
document.getElementsByClassName("img2")[0].src = "./images/" + playerTwoImage;