console.log('app.js running!')
/*----- constants -----*/
const sequences = {
  playerSequence: [],
  computerSequence: []
}
/*----- app's state (variables) -----*/
let counter = 0;
/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function init() {
  for (let i = 1; i < 13; i++) {
    document.querySelector(`#key-${i}`).addEventListener('click', () => {
      console.log(`key-${i} clicked!`)
    });
  }

  document.querySelector("#submit").addEventListener('click', () => {
    console.log('Submit!')
  })
}

function render() {
}

function handleClick(){

}

function generateSequence(){

} 

init();