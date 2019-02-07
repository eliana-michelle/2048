// Display number 2 or 4 in random box
// Event listeners on arrow keys to move 1 square that direction on click
// If value of box === value of box next to it let box = sum of values; Else, boxes stay same value

/*----- constants -----*/
const cellCheck1 = [2, 5]
const cellCheck2 = [3, 6]
const cellCheck3 = [4, 7]
const cellCheck4 = [8]
const cellCheck5 = [6, 9]
const cellCheck6 = [7, 10]
const cellCheck7 = [8, 11]
const cellCheck8 = [12]
const cellCheck9 = [10, 13]
const cellCheck10 = [11, 14]
const cellCheck11 = [12, 15]
const cellCheck12 = [16]
const cellCheck13 = [14]
const cellCheck14 = [15]
const cellCheck15 = [16]


/*----- app's state (variables) -----*/
let score = 0;

/*----- cached element references -----*/
let replayButton = document.getElementById('replay')
let table = document.getElementsByTagName('table');
let cells = document.querySelectorAll('.cell');

/*----- event listeners -----*/
document.addEventListener('keydown', handleArrowPress);
replayButton.addEventListener('click', render)

/*----- functions -----*/

function init (){
  render();
};

function render(){
  cells.forEach(function(cell){
    cell.textContent = '';
  })
  generateTwoFour();
  generateTwoFour();
};

function generateTwoFour(){
  let twoOrFour = Math.floor(Math.random() * 2) > .5 ? 2 : 4;
  let cellID = Math.floor(Math.random() * 16);
  if(cells[cellID].textContent === ''){
    cells[cellID].textContent = twoOrFour;
  } else {
    generateTwoFour();
  }
};

function checkForEmptySpaceUp(){
  for(i = 0; i <= 11; i++){
    if(cells[i].textContent === "" && cells[i+4].textContent !== ""){
      cells[i].textContent = cells[i+4].textContent;
      cells[i+4].textContent = "";
      checkForEmptySpaceUp();
      checkForMatchUp();
    };
  };
};

function checkForMatchUp(){
  for(i = 0; i <= 11; i++){
    if(cells[i].textContent === cells[i+4].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i+4].textContent);
      cells[i].textContent = sum;
      cells[i+4].textContent = "";
    };
  };
};

function checkForEmptySpaceDown(){
  for(i = 15; i > 4; i--){
    if(cells[i].textContent === "" && cells[i-4].textContent !== ""){
      cells[i].textContent = cells[i-4].textContent;
      cells[i-4].textContent = "";
      checkForEmptySpaceDown();
      checkForMatchDown();
    };
  }
};

function checkForMatchDown(){
  for(i = 15; i >= 4; i--){
    if(cells[i].textContent === cells[i-4].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i-4].textContent);
      cells[i].textContent = sum;
      cells[i-4].textContent = "";
    };
  };
};

function checkForEmptySpaceLeft(){
  for(i = 0; i < 3; i++){
    if(cells[i].textContent === "" && cells[i+1].textContent !== ""){
      cells[i].textContent = cells[i+1].textContent;
      cells[i+1].textContent = "";
      checkForEmptySpaceLeft();
    }
  };
  for(i = 4; i < 7; i++){
    if(cells[i].textContent === "" && cells[i+1].textContent !== ""){
      cells[i].textContent = cells[i+1].textContent;
      cells[i+1].textContent = "";
      checkForEmptySpaceLeft();
    };
  };
  for(i = 8; i < 11; i++){
    if(cells[i].textContent === "" && cells[i+1].textContent !== ""){
      cells[i].textContent = cells[i+1].textContent;
      cells[i+1].textContent = "";
      checkForEmptySpaceLeft();
    };
  };
  for(i = 12; i < 15; i++){
    if(cells[i].textContent === "" && cells[i+1].textContent !== ""){
      cells[i].textContent = cells[i+1].textContent;
      cells[i+1].textContent = "";
      checkForEmptySpaceLeft();
    };
  };
};

function checkForMatchLeft(){
  for(i = 0; i < 3; i++){
    if(cells[i].textContent === cells[i+1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i+1].textContent);
      cells[i].textContent = sum;
      cells[i+1].textContent = "";
      break;
    }
  };
  for(i = 4; i < 7; i++){
    if(cells[i].textContent === cells[i+1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i+1].textContent);
      cells[i].textContent = sum;
      cells[i+1].textContent = "";
      break;
    }
  };
  for(i = 8; i < 11; i++){
    if(cells[i].textContent === cells[i+1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i+1].textContent);
      cells[i].textContent = sum;
      cells[i+1].textContent = "";
      break;
    }
  };
  for(i = 12; i < 15; i++){
    if(cells[i].textContent === cells[i+1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i+1].textContent);
      cells[i].textContent = sum;
      cells[i+1].textContent = "";
      break;
    }
  };
};

function checkForEmptySpaceRight(){
  for(i = 0; i < 3; i++){
    if(cells[i].textContent !== "" && cells[i+1].textContent === ""){
      cells[i+1].textContent = cells[i].textContent;
      cells[i].textContent = "";
      checkForEmptySpaceRight();
      checkForMatchRight();
    }
  };
  for(i = 4; i < 7; i++){
    if(cells[i].textContent !== "" && cells[i+1].textContent === ""){
      cells[i+1].textContent = cells[i].textContent;
      cells[i].textContent = "";
      checkForEmptySpaceRight();
      checkForMatchRight();
    };
  };
  for(i = 8; i < 11; i++){
    if(cells[i].textContent !== "" && cells[i+1].textContent === ""){
      cells[i+1].textContent = cells[i].textContent;
      cells[i].textContent = "";
      checkForEmptySpaceRight();
      checkForMatchRight();
    };
  };
  for(i = 12; i < 15; i++){
    if(cells[i].textContent !== "" && cells[i+1].textContent === ""){
      cells[i+1].textContent = cells[i].textContent;
      cells[i].textContent = "";
      checkForEmptySpaceRight();
      checkForMatchRight();
    };
  };
};

function checkForMatchRight(){
  for(i = 3; i > 0; i--){
    if(cells[i].textContent === cells[i-1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i-1].textContent);
      cells[i].textContent = sum;
      cells[i-1].textContent = "";
    }
  };
  for(i = 7; i > 4; i--){
    if(cells[i].textContent === cells[i-1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i-1].textContent);
      cells[i].textContent = sum;
      cells[i-1].textContent = "";
    }
  };
  for(i = 11; i > 8; i--){
    if(cells[i].textContent === cells[i-1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i-1].textContent);
      cells[i].textContent = sum;
      cells[i-1].textContent = "";
    }
  };
  for(i = 15; i > 12; i--){
    if(cells[i].textContent === cells[i-1].textContent && cells[i].textContent !== ""){
      let sum = parseInt(cells[i].textContent) + parseInt(cells[i-1].textContent);
      cells[i].textContent = sum;
      cells[i-1].textContent = "";
    }
  };
};

function handleArrowPress(e){
  if(e.keyCode === 37){
    checkForMatchLeft();
    checkForEmptySpaceLeft();
    generateTwoFour();
  } else if (e.keyCode === 38){
    checkForMatchUp();
    checkForEmptySpaceUp();
    generateTwoFour();
  } else if (e.keyCode === 39){
    checkForMatchRight();
    checkForEmptySpaceRight();
    generateTwoFour();
  } else if (e.keyCode === 40){
    checkForMatchDown();
    checkForEmptySpaceDown();
    generateTwoFour();
  }
};
