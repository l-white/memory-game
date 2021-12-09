const gameContainer = document.getElementById("game");
let flipped = [];
let isMatch = true;

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

  console.log(flipped[0] === flipped[1] ? isMatch : !isMatch);
  console.log(card.style.backgroundColor);
  
  for (let i = 0; i < flipped.length; i++){
    if (flipped[0] !== flipped[1] && flipped.length === 2) {
      card.style.backgroundColor = 'white';
    }
  }

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
