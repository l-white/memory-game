const gameContainer = document.getElementById("game");
let flipped = [];
let cardOne = null;
let cardTwo = null;
let lockBoard = false;
let matches = 0;

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
  // remove event listener if cardOne and cardTwo exist
  
}

// TODO: Implement this function!

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //let clicks = 0;
  if (lockBoard) return;

  let currentCard = event.target;
  flipped.push(currentCard);
  cardOne = flipped[0];
  cardTwo = flipped[1];

  // show card colors
  if (cardOne) {
    cardOne.style.backgroundColor = flipped[0].classList.value;
  }
  if (cardTwo) {
    cardTwo.style.backgroundColor = flipped[1].classList.value;
  }

  if (cardOne && cardTwo && (cardOne.classList.value !== cardTwo.classList.value)){
    lockBoard = true;
    setTimeout(function(){
      cardOne.style.backgroundColor = 'white';
      cardTwo.style.backgroundColor = 'white';
      cardOne = null;
      cardTwo = null;
      lockBoard = false;
    }, 1000);
  } else if (cardOne && cardTwo && (cardOne.classList.value === cardTwo.classList.value)){
    matches += 1;
  }
  if (flipped.length >= 2){
    flipped = [];
  }
  if (matches === 5){
    alert('game over');
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);