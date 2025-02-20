const express = require('express'); //importing the express package
const app = express(); //creating a web app

//Home route
//req: Request, res: Response
app.get('/', function(req, res){
    res.send('Hello World'); //Sending a response to my frontend
});


//Create web server
app.listen(3000, function(){
    console.log('Server running on port 3000...');
});