console.log('app.js running!')
/*----- constants -----*/
/*----- app's state (variables) -----*/
const state = {
  counter: 0,
  hiScore: 0,
  playerSequence: [],
  computerSequence: []
}
/*----- cached element references -----*/
const dialpad = document.querySelectorAll(".is-custom-width");

const newGame = document.querySelector("#newGame");
const submitButton = document.querySelector("#submitButton"); 

/*----- event listeners -----*/


/*----- functions -----*/

const init = () => {

  state.counter = 0;
  state.playerSequence = [];
  state.computerSequence = [];

  dialpad.forEach((keypad, idx) => {
    keypad.addEventListener("click", handleKeypadClick)
  })

  newGame.addEventListener('click', () => {
    init();
  })

  submitButton.addEventListener('click', () => {
    console.log('Submit!')
  })

  render();
}

const render = () => {
  generateSequence();

  if (state.computerSequence.length === state.playerSequence.length) {
    compareSequences();
  }
}

const handleKeypadClick = (e) => {
  console.log(e.target.id)
}

const generateSequence = () =>{
  let randomNum = Math.floor(Math.random() * 12) + 1;
  state.computerSequence.push(randomNum);
} 

const compareSequences = () => {
  
}

init();