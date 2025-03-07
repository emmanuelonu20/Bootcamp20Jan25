const express = require('express');
const app = express();
const db_config = require('./db_config');

db_config.authenticate().then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.log('An error happened with DB connection. ' + err);
});


app.listen(3000, function(){
    console.log('Server running on port 3000...');
});