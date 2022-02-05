// < server set-up >-------------------------------------------------
const express = require('express'); // This calls in express
const app = express(); // This creates the server called 'app'
const PORT = 5000; // This assigns the port to be used
const bodyParser = require('body-parser') //This calls in body parser
app.use(express.static('server/public')) //This sends static files upon server/client connection
app.use(bodyParser.urlencoded({ extended: true })) //This will make res/req data readable
// < // server set-up >-------------------------------------------------

// < input data reciever >-------------------------------------------------
app.post('/export-arithmatic', function(req,res){
    console.log('arithmatic post request recieved.');
    console.log('req.body:', req.body);
    console.log('req.body.arithmaticExport:', req.body.arithmaticExport);
    
    res.sendStatus(201)
}); // END arithmatic export
// < // input data reciever >-------------------------------------------------













app.listen(PORT, function() {
    console.log('Server is now listening on PORT:', PORT);
})