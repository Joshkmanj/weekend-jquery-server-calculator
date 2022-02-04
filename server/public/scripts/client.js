$(document).ready(readyNow)
console.log('Executing Client JS');

function readyNow(){
    console.log('JQuery is ready');
    $('#button-enter').on('click', enterButtonClick)
}

function enterButtonClick(){//This function will collect all inputs
    console.log('executing enterButtonClick');
    
}








//Things to do
//---^^^--Done--^^^--------------------------------------------------------------------------
// * Create addition subtraction multiplication and division inputs
// * package it up into an object
// * send package to server
// * have server take apart data
// * Calculator logic function to process data
// * have data stored in a history on server
// * package up data
// * send it back to client
// * append answer to main display
// * append history below
// * 
// Stretch Goals
// * Make calculator appear like a normal calculator
// * function won't allow improperly filled input fields, shows an alert
// * Make a delete request to server to delete history
// * Allow user to click on something in the history and it'll re-run that
//