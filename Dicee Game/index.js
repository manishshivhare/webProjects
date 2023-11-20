var ranNumber1 = Math.floor(Math.random() * 6 ) + 1; 
var ranNumber2 = Math.floor(Math.random() * 6 ) + 1; 
imageArray = document.getElementsByTagName("img");
var src1 = "./images/dice"+ ranNumber1 + ".png";
var src2 = "./images/dice"+ ranNumber2 + ".png";
imageArray[0].setAttribute("src", src1);
imageArray[1].setAttribute("src", src2);
if (ranNumber1 > ranNumber2)
{
    document.querySelector("h1").innerText = "Player1 Wins!";
}
else if (ranNumber1 < ranNumber2)
{
    document.querySelector("h1").innerText = "Player2 Wins!";
}
else{
    document.querySelector("h1").innerText = "Draw!";
}x