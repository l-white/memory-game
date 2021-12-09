const gameContainer = document.getElementById("game");
let flipped = [];
let isMatch = true;
let cardOne = null;
let cardTwo = null;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function changeColor(cardToChange){
  cardToChange.style.backgroundColor = 'white';
}

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //let clicks = 0;
  
  let card = event.target;
  console.log(card);
  let clickCount = 0;
  gameContainer.addEventListener('click', function(){
    clickCount++;
    console.log(`click count: ${clickCount}`);
  });
  card.style.backgroundColor = card.classList[0];
 
  flipped.push(card.classList[0]);
  console.log(flipped);

  //console.log(card.style.backgroundColor);
  
  /*for (let i = 0; i < flipped.length; i++){
    if (flipped[0] !== flipped[1] && flipped.length === 2){
      event.target.style.backgroundColor = 'white';
    }
  }*/
  if (!cardOne || !cardTwo){
    cardOne = event.target;
    //console.log(cardOne);
  }
  if (cardOne && !cardTwo){
    cardTwo = event.target;
    //console.log(cardTwo);
  }

  console.log(flipped[0] === flipped[1] ? isMatch : !isMatch);

  if (flipped[0] !== flipped[1] && flipped.length === 2){
    //setTimeout(changeColor(cardOne), 3000);
    //setTimeout(changeColor(cardTwo), 1000);
    setTimeout(function() {
      console.log(cardOne);
      //console.log(cardTwo);
      cardOne.style.backgroundColor = "white";
      //cardTwo.style.backgroundColor = "white";
      //card1.classList.remove("flipped");
      //card2.classList.remove("flipped");
      cardOne = null;
      //cardTwo = null;
      //noClicking = false;
      return cardOne;
    }, 1500);
    setTimeout(function() {
      console.log(cardOne);
      //console.log(cardTwo);
      event.target.style.backgroundColor = "white";
      //cardTwo.style.backgroundColor = "white";
      //card1.classList.remove("flipped");
      //card2.classList.remove("flipped");
      cardTwo = null;
      //cardTwo = null;
      //noClicking = false;
      return event.target;
    }, 1500);
    flipped.pop();
    flipped.pop();
  }
  

  

//cardOne.style.backgroundColor = 'white';

  //console.log(cardOne.style.backgroundColor);
  //console.log(cardTwo.style.backgroundColor);
  //console.log(cardOne.classList[0] === cardTwo.classList[0]);



  //console.log(event);
  //console.log(event.target);
  
  //cardOne = flipped[0];
  //cardTwo = flipped[1];
  /*cardOne = event.target;
  cardTwo = event.target;
  console.log(cardOne, cardTwo);
  console.log(cardOne === cardTwo);

  if (cardOne !== cardTwo){
    console.log("no match");
  } else {
    console.log("match");
  }

  if (cardOne || cardTwo && cardOne !== cardTwo){
    setTimeout(function background(){
      card.style.background = "white";
    });
  }*/

  
//With every click you will go through a conditional check that I will pseudo code here for you:

//- Are there any values for cardOne and cardTwo?
//If not:
//- Set the current target to cardOne and return.
/*
if (!cardOne || !cardTwo) {
  cardOne = event.target;
  console.log(`CardOne: ${cardOne}`);
  console.log(event.target);
  return cardOne;
}

if (cardOne !== null && cardTwo === null){
  cardTwo = event.target;
  console.log(`CardTwo: ${cardTwo}`);
  console.log(event.target);
  return cardTwo;
}*/

//console.log(cardOne);

//console.log(cardOne, cardTwo);
//If only one of them has a value:
//- Set the current target to cardTwo and now we can run all our comparisons and code for keeping them flipped or un-flipping them.
//If both already have a value (which means someone is rage clicking the cards) just return so that nothing happens until the matching code has run.

//Just make sure to set the values of those two variables to null (a falsey value) after you're done with your comparison.


  




  /*
  for (let i = 0; i < flipped.length; i++){
    if (flipped[0] !== flipped[1] && flipped.length === 2) {
      card.style.backgroundColor = 'white';
    }
  }*/

  //if (flipped[0] !== flipped[1] && flipped.length === 2){
    //for (let i = 0; )
    //card.style.backgroundColor = 'white';
    //flipped[0].style.backgroundColor === 'white';
    //flipped[1].style.backgroundColor === 'white';
  //}
  //card.style.backgroundColor = 'white';
  //console.log(flipped.length);
  //console.log(flipped.length === 2);
  //console.log(!isMatch);
  //if (!isMatch && flipped.length === 2) {
    //event.target.style.removeProperty('style');
    //console.log(card.style.backgroundColor);
    //card.style.backgroundColor = 'white';

  //}
}

// when the DOM loads
createDivsForColors(shuffledColors);
