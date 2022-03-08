
 document.querySelector("button").addEventListener("click", dice);

 function dice(randomNumber1,randomNumber2) {

  randomNumber1 = Math.random();
   randomNumber1 = randomNumber1 * 6;
   randomNumber1 = Math.floor(randomNumber1) + 1;
     // alert(randomNumber1);

   if (randomNumber1===1)
   {
     document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
   }
   if (randomNumber1 === 2) {
     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
   }
   if (randomNumber1 === 3) {
     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
   }
    if (randomNumber1 === 4) {
     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
   }
    if (randomNumber1 === 5) {
     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
   }
    if (randomNumber1 === 6) {
     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
   }
   // another method for doing the same is below this code
   //  randomNumber2 =Math.floor(Math.random()*6 +1) ;
   // alert(randomNumber2);
   // switch (randomNumber2) {
   //   case 1:
   //     document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
   //     break;
   //   case 2:
   //     document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
   //     break;
   //   case 3:
   //     document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
   //     break;
   //   case 4:
   //     document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
   //     break;
   //   case 5:
   //     document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
   //     break;
   //   case 6:
   //     document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
   //    break;
   // }

    randomNumber2 = Math.floor(Math.random() * 6) + 1;

   var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

   document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

   if(randomNumber1>randomNumber2)
   {
     document.querySelector("h1").innerHTML="Player 1 Wins!";
   }
   else if (randomNumber1<randomNumber2)
   {
     document.querySelector("h1").innerHTML="Player 2 Wins!";
   }
   else if (randomNumber1===randomNumber2)
   {
     document.querySelector("h1").innerHTML="Oh! It's a draw.";
   }

   document.querySelector("button").innerHTML="Click To Play Again";

 }
