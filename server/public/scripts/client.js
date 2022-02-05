$(document).ready(readyNow)
console.log('Executing Client JS');

// Current action is the plus/minus/muliply/divide that's most recently decided
let chosenOperator ;

function readyNow(){
    console.log('JQuery is ready');
    
    // Click listeners created for the plus/minus/muliply/divide operators
    $('#button-plus').on('click', operatorButtonClick)
    $('#button-minus').on('click', operatorButtonClick)
    $('#button-multiply').on('click', operatorButtonClick)
    $('#button-divide').on('click', operatorButtonClick)

    // Click listener for enter button
    $('#button-enter').on('click', enterButtonClick)
}



// < Button Click Handlers > ---------------------------------------------------------------------------

// Operator function to assign which arithmatic operation is to be used
function operatorButtonClick(){
    console.log('Operator Button Clicked');
    
    //This takes the most recently chosen operator and saves it
    chosenOperator = $(this).attr("id")
    operatorHighlighter(chosenOperator)
    console.log('The current operator chosen is', chosenOperator);

}


// Enter function collects current inputs and packages it up
function enterButtonClick(){
    console.log('Enter Button Clicked');
    
    // This packs up the inputs into an object named arithmatic
    let arithmatic ={
        operator: chosenOperator,
        valueOne: $('.input.one').val(),
        valueTwo: $('.input.two').val(),
    }
    // Logging intake values for test purposes
    console.log('Arithmatic to export:', arithmatic);
    
    // This sends all intake info to be shipped out below
    
}
// < // Button Click Handlers  > ---------------------------------------------------------------------------



// <   Input data sent out  > ---------------------------------------------------------------------------
// function name(params) {
        
// }


// < // Input data sent out  > ---------------------------------------------------------------------------


// <  display handlers  > ---------------------------------------------------------------------------
function operatorHighlighter(operator) {
   console.log('Highlight this:', operator);
}

// < // display handlers  > ---------------------------------------------------------------------------










//Things to do
// * Create addition subtraction multiplication and division inputs
//---^^^--Done--^^^--------------------------------------------------------------------------
// * package it up into an object
// * send package to server
// * have server take apart data
// * Calculator logic function to process data
// * have data stored in a history on server
// * package up data
// * send it back to client
// * append answer to main display
// * append history below
// 
// Stretch Goals
// * Make calculator appear like a normal calculator
// * function won't allow improperly filled input fields, shows an alert
// * Make a delete request to server to delete history
// * Allow user to click on something in the history and it'll re-run that
//
// Personal Goals
// * Additional Styling
// * The buttons you press show that you pressed them
// * 