const express = require('express'); //importing the express package
const app = express(); //creating a web app
const {add, sub, module_name} = require('./arithmetic_calc'); //importing our custom module
//const arithmeticCalc = require('./arithmetic_calc'); //importing our custom module

app.use(globalMiddleware2); //Global middleware
app.use(globalMiddleware); //Global middleware


function globalMiddleware(req, res, next) {
    console.log('Global middleware 1');
    next();
}

function globalMiddleware2(req, res, next) {
    console.log('Global middleware 2');
    next();
}

function localMiddleware(req, res, next) {
    console.log('Local middleware');
    next();
}


//Home route
//req: Request, res: Response
app.get('/', function(req, res){
    console.log('Home page')
    const val1 = 45;
    const val2 = 10;
    let result = `Subtraction: ${sub(val1, val2)}, Addition: ${add(val1, val2)}`;
   
    res.send(result); //Sending a response to my frontend
});

app.get('/about', localMiddleware, function(req, res){
    console.log('about page');
    res.send('About page');
});

app.get('/contact', function(req, res){
    console.log('contact page')
    res.send('Contact page');
});

//Create web server
app.listen(3000, function(){
    console.log('Server running on port 3000...');
});