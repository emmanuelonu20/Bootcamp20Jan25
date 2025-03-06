const express = require('express'); //impprt express package
const app = express();

app.use(express.urlencoded({extended: false})); //middleware 

//Students
const students = [
    {id: 1, name: 'John Wick', department: 'Mathematics'},
    {id: 2, name: 'Jennifer Lopez', department: 'Mathematics'},
    {id: 3, name: 'Ben Ken', department: 'Statistics'},
];

//Get all students
app.get('/students', function(req, res){

    let student_data = [...students]; //Cloning the students data

    //Filtering by department name
    if (req.query.department) {
        student_data = student_data.filter((student_item) => {
            return student_item.department === req.query.department;
        });
    }

    //Filter by any field
    if (req.query) {
        for(let key in req.query) {
            student_data = student_data.filter((student_item) => {
                return student_item[key].toString() === req.query[key];
            });        
        }
    }

    res.status(200).send(student_data);``
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
app.post('/students', function(req, res){
    const student = req.body;
    student.id = parseInt(student.id);
    students.push(student); //adding a new item into the above students array
    res.status(201).send(student);
});

//Update a student
app.put('/students/:student_id', function(req, res){
    //parseInt convert string to number
    const student_id = parseInt(req.params.student_id); 

    //Get array index of the student
    const index = students.findIndex((student_item) => {
        return student_item.id === student_id;
    });

    if (index >= 0) {
        const student = req.body;
        student.id = parseInt(student.id);

        //update the student data
        students[index] = student;

        res.status(200).send(student);
    } else {
        res.status(404).send('unknown student');
    }
});

//Update only department of a student
app.patch('/students/:student_id', function(req, res){
    //parseInt convert string to number
    const student_id = parseInt(req.params.student_id); 

    //Get array index of the student
    const index = students.findIndex((student_item) => {
        return student_item.id === student_id;
    });

    if (index >= 0) {
        const student = students[index]; //Get student data from students array

        //update the student department
        student.department = req.body.department;

        res.status(200).send(student);
    } else {
        res.status(404).send('unknown student');
    }
});

//Delete a student
app.delete('/students/:student_id', function(req, res){
    //parseInt convert string to number
    const student_id = parseInt(req.params.student_id); 

    //Get array index of the student
    const index = students.findIndex((student_item) => {
        return student_item.id === student_id;
    });

    if (index >= 0) {
        const student = students[index];

        //delete student from students array
        students.splice(index, 1);

        res.status(200).send(student);
    } else {
        res.status(404).send('unknown student');
    }
});

//Web server
app.listen(3000, function(){
    console.log('Server is running on port 3000...')
});