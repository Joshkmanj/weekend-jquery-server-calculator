$(document).ready(readyNow)

//----<Global Variables>---------
let chosenOperator ; // Current action is the plus/minus/muliply/divide that's most recently decided
//----</Global Variables>---------

//---< Things to be ready on page-load>-----------------------------------
function readyNow(){
    console.log('JQuery is ready');
    // Click listeners created for the plus/minus/muliply/divide operators
    $('#button-plus').on('click', operatorButtonClick)
    $('#button-minus').on('click', operatorButtonClick)
    $('#button-multiply').on('click', operatorButtonClick)
    $('#button-divide').on('click', operatorButtonClick)  
    // Click listener for ENTER button
    $('#button-enter').on('click', enterButtonClick)
    // Click listener for CLEAR button
    // $('#button-clear').on('click', clearButtonClick)
    
    arithmaticImporter()
}
//---<//Things to be ready on page-load>-----------------------------------



// < Button Click Handlers > --------------------------------------------------------------------------
function operatorButtonClick(){// Operator function to assign which arithmatic operation is to be used
    console.log('Operator Button Clicked');
    
    //This takes the most recently chosen operator and saves it
    chosenOperator = $(this).attr("id")
    /*operatorHighlighter(chosenOperator) This is a personal goal, I'll update this later */
    console.log('The current operator chosen is', chosenOperator);

}
function enterButtonClick(){// Enter function collects current inputs and packages it up
    console.log('Enter Button Clicked');
    
    // This packs up the inputs into an object named arithmatic
    let arithmatic ={
        operator: chosenOperator,
        valueOne: $('.input.one').val(),
        valueTwo: $('.input.two').val(),
    }
    
    // This sends all intake info to be shipped out below
    arithmaticExporter(arithmatic);

    // This calls a display-handler to reset the inputs
    emptyInputs();
}
// < // Button Click Handlers  > ----------------------------------------------------------------------



// < Input data sent out  > ---------------------------------------------------------------------------
function arithmaticExporter(arithmaticExport) {
    console.log('Arithmatic to export:', arithmaticExport);

    $.ajax({
        type: "POST",
        url:"/export-arithmatic",
        data: {
            arithmaticExport
        }
    }).then(function(response) {
        console.log('Confirmation recieved :), now let\'s get some answers' )
        //After getting confirmation, it'll trigger a GET request to import data
        arithmaticImporter(response);
    }).catch(function (response) {
        console.log('No confirmation recieved :\'(')
    })
}
// < // Input data sent out  > ------------------------------------------------------------------------

// < Import data from server >-------------------------------------------------------------------------
function arithmaticImporter() {
    $.ajax({
        method: 'GET',
        url: '/answers'
    }).then(function(response){
        console.log('arithmatic imported, here\'s the response', response);
        // TODO Render stuff to the DOM
        renderAnswers(response)
    }).catch(function(response){
        console.log('Failed to import arithmatic', response);  
    })
}
// < // Import data from server >----------------------------------------------------------------------




// <  display handlers  > ----------------------------------------------------------------------------
function emptyInputs (){
    console.log('emptying inputs');
    
    chosenOperator = undefined;
    $('.input').val('')
}
function renderAnswers(array) {
    console.log('rendering answers');
    
    // Emptying old answers
    $('#answer-holder').empty()
    $('#most-recent-answer').empty()
    
    // Refreshing new answers to page
    $('#most-recent-answer').append(`${array[0].valueOne} ${array[0].operator} ${array[0].valueTwo} = ${array[0].answer}`)
   
    for (let i=1; i<array.length; i++) { // The array starts at index=1 so that the most recent answer is displayed
        $('#answer-holder').append(`<li>${array[i].valueOne} ${array[i].operator} ${array[i].valueTwo} = ${array[i].answer}</li>`)
        console.log('Appending from array', array[i]);
        
    }
}



// This is a personal Goal, I'll update this later
// function operatorHighlighter(operator) {
//    console.log('Highlight this:', operator);

// }

// < // display handlers  > ---------------------------------------------------------------------------













//Things to do
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
//---^^^--Done--^^^--------------------------------------------------------------------------
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