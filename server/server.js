// < server set-up >-------------------------------------------------
const express = require('express'); // This calls in express
const app = express(); // This creates the server called 'app'
const PORT = 5000; // This assigns the port to be used
const bodyParser = require('body-parser') //This calls in body parser
app.use(express.static('server/public')) //This sends static files upon server/client connection
app.use(bodyParser.urlencoded({ extended: true })) //This will make res/req data readable
// < // server set-up >-------------------------------------------------

//----<Global Variables>---------
let history = []
//----</Global Variables>---------

// < POST requests >-------------------------------------------------
app.post('/export-arithmatic', function(req,res){
    console.log('arithmatic post request recieved.');
    console.log('req.body.arithmaticExport:', req.body.arithmaticExport);
    let importedData = req.body.arithmaticExport ;
    calculator(importedData)
    res.sendStatus(201)
});
// < // End of POST requests >-------------------------------------------------

// < GET Requests >-----------------------------------------------------------
app.get('/answers',function(req,res) {
    console.log('request at /answers was made');
    res.send()
})

// < // End of GET requests >-------------------------------------------------


// < arithmatic functions >-------------------------------------------------
// let exampleData= { operator: 'button-divide', valueOne: '10', valueTwo: '5' };
// console.log('example data:', exampleData);

function calculator(object){
    let answer;
    let firstNumber = Number(object.valueOne)
    let secondNumber = Number(object.valueTwo)
    let operator = object.operator

    switch (operator) {
        case 'button-plus':
            answer=(firstNumber+secondNumber)
            console.log(firstNumber, '+', secondNumber, "=", answer);
        break;
        case 'button-minus':
            answer=(firstNumber-secondNumber)
            console.log(firstNumber, '-', secondNumber, "=", answer);
        break;
        case 'button-multiply':
            answer=(firstNumber*secondNumber)
            console.log(firstNumber, '*', secondNumber, "=", answer);
        break;
        case 'button-divide':
            answer=(firstNumber/secondNumber)
            console.log(firstNumber, '/', secondNumber, "=", answer);
        break;
        default: console.log('No operator chosen');
        break;
    }//end switch
    console.log('answer is:', answer);
}//end calculator
// < // arithmatic functions >-------------------------------------------------

// <









app.listen(PORT, function() {
    console.log('Server is now listening on PORT:', PORT);
})