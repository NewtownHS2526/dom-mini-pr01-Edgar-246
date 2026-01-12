console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");
const winnerText = document.querySelector("#winner");
const restartButton = document.querySelector("#restart-button");


// OnClick Functions Here
const advanceBlue = (e) => {
  console.log("clicked");
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
  blueHorse.alt = `blue horse at position ${blue_position} out of 5`;
};
const advancePink = (e) => {
  console.log("clicked");
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
 pinkHorse.alt = `pink horse at position ${pink_position} out of 5`;
};
const advanceBrown = (e) => {
  console.log("clicked");
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
  brownHorse.alt = `brown horse at position ${brown_position} out of 5`;
};

// Check for a winner
const checkWinner = (position, color) => {
 if (position === 5) {
    winnerText.innerHTML = color + " is the Winner!";
 }
};



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);

//Restart Button
const clickrestart = (e) => {
console.log("clicked");
brown_position = 1;
changePosition(brownHorse, brown_position);
blue_position = 1;
changePosition(blueHorse, blue_position);
pink_position = 1;
changePosition(pinkHorse, pink_position);
};

restartButton.addEventListener("click", clickrestart);