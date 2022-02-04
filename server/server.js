const express = require('express');
const app = express();
let PORT = 5000;
app.use(express.static('server/public'))














app.listen(PORT, function() {
    console.log('Server is now listening on PORT:', PORT);
})