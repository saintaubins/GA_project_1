
/************************************************************
 ************************************************************
 *                                                          *
 *                      Sem Saint-Aubin,                    *
 *                                                          *
 *                     Memory Game, Simon                   *
 *                                                          *
 *                          Project 1                       *
 *                           level 2                        *
 *                                                          *
 ************************************************************
 ***********************************************************/




//testing the connection to HTML
console.log('javaScript is live');

/************* Variables from the DOM **********************/

//Grabbing start button from the DOM
let start = document.querySelector('.start');

//Grabbing stop button from the DOM
let stop = document.querySelector('.stop');

//grabbing the squares from the DOM
//note the array is already filled
let square = document.getElementsByClassName('square');
console.log('square.length = ', square.length);

//I need to send messages back out to the DOM
let status = document.querySelector('.status');
let level = document.querySelector('.level');

//I need a global variable called clicks
let clicks = 0;
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

let randomSquare = 0;

//This JavaScript function always returns a random number 
//between min and max (both included):, got this from W3 
//schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
randomSquare = getRndInteger(0,4);

//filling flashArray with random integers
for(let i = 0; i < 5; i++){
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

//eventListener to stop the game
stop.addEventListener('click', stopGame);

/******************* My functions **************************/

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
            console.log('beggining of add class', index );
            square[flashArray[index]].classList.add('flash');
            console.log('end of add class', index );
            //setTimeout(flashOff, delay);
        }, delay);
        // same here the scope is only to the for loop
        setTimeout(() => {
            console.log('beggining remove class', index );
            square[flashArray[index]].classList.remove('flash');
            console.log('end of remove class', index );
            //setTimeout(flashOff, delay);
        }, delay = delay + 1000);
        //setTimeout(flashOff, delay + 1000);
    delay = delay + 1000; 
    }
    delay = 0;
    //done  = true;
}
//making function called stop game to stop the game.
function stopGame(){
    console.log('stopGame clicked');
    window.location.reload();
}
//this is supposed to see if the pattern followed by
//the user matches the pattern made by the flash function
function verifyFlashPattern(evt){
    let message = '';
    console.log('evt.target = ', evt.target.id);
    //this part adds flash to the button when it's clicked 
    evt.target.classList.add('flash');
    setTimeout(() => {
        evt.target.classList.remove('flash');
    },250);
    console.log('verifyFlashPattern function works');
    //this part is checking if clicked array matches the random
    //array
        checkArray += evt.target.id
        if(clicks == 4) { 
            if(checkArray === flashArray && checkArray.length === flashArray.length){
            console.log('its a match');
            message = 'Its a match';
            status.innerHTML = message;
            console.log('status.innerHTML = ',status.innerHtml);
            }  else{
                message = 'Sorry try again';
                status.innerHTML = message;
                console.log('sorry try again');
                }
            console.log('checkArray = ', checkArray);
        }
     clicks++;
}


