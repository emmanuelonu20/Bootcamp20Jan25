const express = require('express');
const app = express();
const dbConfig = require('./db_config');
const Task = require('./models/task');
const cors = require('cors');

app.use(cors());

dbConfig.authenticate().then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err);
});

//Get all tasks
app.get('/tasks', function(req, res){
    Task.findAll().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.listen(3000, function(){
    console.log('Server running on port 3000...');
});