const express = require('express'); //impprt express package
const app = express();

//Students
const students = [
    {id: 1, name: 'John Wick', department: 'Mathematics'},
    {id: 2, name: 'Jennifer Lopez', department: 'Mathematics'},
    {id: 3, name: 'Ben Ken', department: 'Statistics'},
];

//Get all students
app.get('/students', function(req, res){
    res.status(200).send(students);
});

//Get a single student
app.get('/students/:student_id', function(req, res){
    //parseInt convert string to number
    const student_id = parseInt(req.params.student_id); 

    //Find student in array
    const student = students.find((student_item) => {
        return student_item.id === student_id;
    });

    //Send response to client
    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send('Student not found');
    }
});

//Create a new student

//Update a student

//Update only department of a student

//Delete a student

//Web server
app.listen(3000, function(){
    console.log('Server is running on port 3000...')
});