const express = require('express');
const app = express();
const db_config = require('./db_config');
const Student = require('./models/student');
const Department = require('./models/department');
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

db_config.authenticate().then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.log('An error happened with DB connection. ' + err);
});

//Define table relationship
Student.belongsTo(Department, {
    foreignKey: 'department_id'
});

//Get all student
app.get('/students', function(req, res){
    const sql_data = {
        where: {},
        include: [Department]
    };

    //Filter by department ID
    if(req.query.department_id) {
        sql_data.where.department_id = req.query.department_id;
    }

    //Filter by age
    if(req.query.age) {
        sql_data.where.age = req.query.age;
    }

    Student.findAll(sql_data).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Get a single student
app.get('/students/:student_id', function(req, res){
    const student_id = parseInt(req.params.student_id);

    const sql_data = {
        include: [Department]
    };

    Student.findByPk(student_id, sql_data).then((result) => {
        if (result){
            res.status(200).send(result);
        } else {
            res.status(404).send('Student not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Create a student
app.post('/students', function(req, res){
    Student.create(req.body).then((result) => {
        res.status(201).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Update a student
app.patch('/students/:student_id', function(req, res){
    const student_id = parseInt(req.params.student_id);

    Student.findByPk(student_id).then((result) => {
        if (result){
            //updates the DB result with the data sent from client.
            Object.assign(result, req.body);

            //Save to DB
            result.save().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });

        } else {
            res.status(404).send('Student not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Delete a student
app.delete('/students/:student_id', function(req, res){
    const student_id = parseInt(req.params.student_id);

    Student.findByPk(student_id).then((result) => {
        if (result){
            //delete from DB
            result.destroy().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });

        } else {
            res.status(404).send('Student not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.get('/departments', function(req, res){
    Department.findAll().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.listen(3000, function(){
    console.log('Server running on port 3000...');
});