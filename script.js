
/************************************************************
 ************************************************************
 *                                                          *
 *                      Sem Saint-Aubin,                    *
 *                                                          *
 *                     Memory Game, Simon                   *
 *                                                          *
 *                          Project 1                       *
 *                                                          *
 *                                                          *
 ************************************************************
 ***********************************************************/




//testing the connection to HTML
console.log('javaScript is live');


/************* Variables from the DOM **********************/

//Grabbing start button from the DOM
let start = document.querySelector('.start');

//Grabbing stop button from the DOM
let reset = document.querySelector('.reset');

//grabbing the squares from the DOM
//note the array is already filled
let square = document.getElementsByClassName('square');
console.log('square.length = ', square.length);

//I need to send messages back out to the DOM
let status = document.querySelector('.status');
let level = document.querySelector('.level');

//getting wins num from the dom
let winsnum = document.querySelector('.winsnum');

//getting losses num fro the dom
let lossesnum = document.querySelector('.lossesnum');

//getting button from the dom
let playagain = document.querySelector('#playagain');
console.log('play again button', playagain);

//I need a global variable called clicks
let clicks = 0;

//defining a string called message
let message = '';

//defining a number to keeptrack of wins and keeptrack losses
let keepTrackW = 0;
let keepTrackL = 0;
/********************** My Arrays **************************/


//flashArray should send a random pattern to
let flashArray = [];

//checkArray should compare user input to flash array
let checkArray = [];

//need an index to pass to 2 functions flashOn, and flashOff
//let index = 0;
//let done = false;
//need a delay of 1000ms and incrementor of 1000ms
//let delay = 1000;
/********************  Variables ***************************/

//let randomSquare = 0;

//This JavaScript function always returns a random number 
//between min and max (both included):, got this from W3 
//schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//randomSquare = getRndInteger(0,3);

//filling flashArray with random integers
for(let i = 0; i < 4; i++){
    flashArray += getRndInteger(0,3);
    console.log('flashArray = ', flashArray);
}

/**************** My Event Listeners ***********************/

//adding event listeners to all the squares
//using the for loop to do it dynamically
for (let i = 0; i < square.length; i++){
    //console.log('square[i] = '+square[i]);
    square[i].addEventListener('click', verifyFlashPattern);
    //square[i].addEventListener('click', turnBlue);
}
//eventListener to start the game
start.addEventListener('click', flashPattern);
start.addEventListener('mouseover', sTurnWhite);
start.addEventListener('mouseout', sMouseOut);
//eventListener to stop the game
reset.addEventListener('click', resetGame);
reset.addEventListener('mouseover', rTurnWhite);
reset.addEventListener('mouseout', rMouseOut)
//playAgain event Listener
playagain.addEventListener('click', playingAgain);
/******************* My functions **************************/
function rTurnWhite(){
    reset.classList.add('white');
}

function sTurnWhite(){
    start.classList.add('white');
}

function sMouseOut(){
    start.classList.remove('white');
}

function rMouseOut(){
    reset.classList.remove('white');
}
//1. Making a function called flash, this will reference
//a class with the opacity class to be active, and inactive, 
//then not active.
//2. This function should also make a random generator of 
//flashes througout the squares, will need to call math. random.
function flashPattern(){
    //verifyFlashPattern();
    let delay = 1000;
    console.log('flashPattern clicked');
    //random = Math.floor(Math.random() * 11);
    //console.log('randomSquare = ', randomSquare);
    for(let index = 0; index < flashArray.length; index++){
        // not storing function in a avariable, known as anymous
        // function
        setTimeout(() => {
            console.log('beggining of add class', index + delay);
            square[flashArray[index]].classList.add('flash');
            console.log('end of add class', index + delay);
            //setTimeout(flashOff, delay);
        }, delay);
        // same here the scope is only to the for loop
        setTimeout(() => {
            console.log('beggining remove class', index + delay);
            square[flashArray[index]].classList.remove('flash');
            console.log('end of remove class', index + delay);
            //setTimeout(flashOff, delay);
        }, delay = delay + 1000);
        //setTimeout(flashOff, delay + 1000);
    delay = delay + 1000; 
    }
    delay = 0;
    //done  = true;
}
function playingAgain(){
    console.log('playinAgain clicked');
    clicks = 0;
    flashArray = [];
    console.log('flashArray = ',flashArray);
    checkArray = [];
    console.log('checkArray = ', checkArray);
    for(let i = 0; i < 4; i++){
        flashArray += getRndInteger(0,3);
        console.log('flashArray = ', flashArray);
    }
    flashPattern();
    //verifyFlashPattern();
    status.innerHTML = 'Status';
}
//making function called stop game to stop the game.
function resetGame(){
    console.log('resetGame clicked');
    window.location.reload();
}

//this is supposed to see if the pattern followed by
//the user matches the pattern made by the flash function
function verifyFlashPattern(evt){
    console.log('evt.target = ', evt.target.id);
    //this part adds flash to the button when it's clicked 
    evt.target.classList.add('flash');
    setTimeout(() => {
        evt.target.classList.remove('flash');
    },100);
    console.log('verifyFlashPattern function works');
    //this part is checking if clicked array matches the random
    //array
        checkArray += evt.target.id
        if(clicks == (flashArray.length - 1)) { 
            if(checkArray === flashArray && checkArray.length === flashArray.length){
            keepTrackW = keepTrackW + 1;
            console.log('its a match');
            message = 'You Win';
            status.innerHTML = message;
            winsnum.innerHTML = keepTrackW;
            console.log('status.innerHTML = ',status.innerHTML);
            }  else{
                keepTrackL = keepTrackL + 1;
                lossesnum.innerHTML = keepTrackL;
                message = 'Sorry try again';
                status.innerHTML = message;
                console.log('sorry try again');
                }
            console.log('checkArray = ', checkArray);
        }
     clicks++;
}


