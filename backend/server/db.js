//sql connection
// const mysql = require('mysql2');
// require('dotenv').config();  

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.message);
//         return;
//     }
//     console.log('Connected to MySQL database!');
// });

// module.exports = db;  



//mongoDB connection


const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB database!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

db();

module.exports = mongoose;
