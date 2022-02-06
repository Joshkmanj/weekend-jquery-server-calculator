// < server set-up >-------------------------------------------------
const express = require('express'); // This calls in express
const app = express(); // This creates the server called 'app'
const PORT = 5000; // This assigns the port to be used
const bodyParser = require('body-parser') //This calls in body parser
app.use(express.static('server/public')) //This sends static files upon server/client connection
app.use(bodyParser.urlencoded({ extended: true })) //This will make res/req data readable
// < // server set-up >-------------------------------------------------

//----<Global Variables>---------
let answerHistory = []
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
    res.send(answerHistory)
})
// < // End of GET requests >-------------------------------------------------

// < Delete Requests >-----------------------------------------------------------
app.delete('/reset',function(req,res) {
    console.log('request at /reset was made');
    answerHistory = [];
    res.sendStatus(200)
})
// < // End of Delete Requests >-----------------------------------------------------------

// < arithmatic functions >-------------------------------------------------
function calculator(object){
    let answer;
    let newOperator
    let firstNumber = Number(object.valueOne)
    let secondNumber = Number(object.valueTwo)

    switch (object.operator) {
        case 'button-plus':
            answer=(firstNumber+secondNumber)
            newOperator='+'
            console.log(firstNumber, '+', secondNumber, "=", answer);
        break;
        case 'button-minus':
            answer=(firstNumber-secondNumber)
            newOperator='-'
            console.log(firstNumber, '-', secondNumber, "=", answer);
        break;
        case 'button-multiply':
            answer=(firstNumber*secondNumber)
            newOperator='*'
            console.log(firstNumber, '*', secondNumber, "=", answer);
        break;
        case 'button-divide':
            answer=(firstNumber/secondNumber)
            newOperator='/'
            console.log(firstNumber, '/', secondNumber, "=", answer);
        break;
        default: console.log('No operator chosen');
        break;
    }//end switch
    console.log('answer is:', answer);
    let completeArithmatic = {
        operator: newOperator,
        valueOne: firstNumber,
        valueTwo: secondNumber,
        answer: answer,
    }
    answerHistory.unshift(completeArithmatic)
}//end calculator
// < // arithmatic functions >-------------------------------------------------










app.listen(PORT, function() {
    console.log('Server is now listening on PORT:', PORT);
})