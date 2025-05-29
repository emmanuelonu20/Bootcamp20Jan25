const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth_routes');
const transactionRoutes = require('./routes/transaction_routes');
const userRoutes = require('./routes/user_routes');
const config = require('./config');

//Global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/uploads', express.static('uploads')); //Make uploads folder publicly accessible

//Auto-update/create DB tables
config.sync({ alter: true }).then(() => {}).catch((err) => {
    console.log(err);
});

//Test DB connection
config.authenticate().then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err);
});

//register routes
app.use('/auth', authRoutes);
app.use('/transactions', transactionRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});


