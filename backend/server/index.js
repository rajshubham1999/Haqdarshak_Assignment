// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const db = require('./db');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/api/checkMobileNumber', (req, res) => {
//     const { mobileNumber } = req.body;

//     const query = 'SELECT * FROM person_details WHERE mobileNumber = ?';

//     db.query(query, [mobileNumber], (err, result) => {
//         if (err) {
//             console.error('Error querying the database:', err.message);
//             return res.status(500).json({ message: 'Error checking phone number.' });
//         }

//         if (result.length > 0) {
//             return res.status(200).json({ message: 'Phone number already registered' });
//         } else {
//             return res.status(200).json({ message: 'Phone number not found' });
//         }
//     });
// });

// app.post('/api/savePersonDetails', (req, res) => {
//     const { name, gender, dob, age, state, district, pincode, mobileNumber } = req.body;

//     const query = `
//         INSERT INTO person_details (name, gender, dob, age, state, district, pincode, mobileNumber)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     db.query(query, [name, gender, dob, age, state, district, pincode, mobileNumber], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err.message);
//             return res.status(500).json({ message: 'Error saving data.' });
//         }
//         res.status(200).json({ message: 'Data saved successfully!', id: result.insertId });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });





//mongoDB Connection 



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Import database connection
const Person = require('./models/person');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Check Mobile Number
app.post('/api/checkMobileNumber', async (req, res) => {
    const { mobileNumber } = req.body;

    try {
        const person = await Person.findOne({ mobileNumber });
        if (person) {
            return res.status(200).json({ message: 'Phone number already registered' });
        } else {
            return res.status(200).json({ message: 'Phone number not found' });
        }
    } catch (err) {
        console.error('Error querying the database:', err.message);
        res.status(500).json({ message: 'Error checking phone number.' });
    }
});

// Save Person Details
app.post('/api/savePersonDetails', async (req, res) => {
    const { name, gender, dob, age, state, district, pincode, mobileNumber } = req.body;

    try {
        const person = new Person({
            name,
            gender,
            dob,
            age,
            state,
            district,
            pincode,
            mobileNumber,
        });

        const savedPerson = await person.save();
        res.status(200).json({ message: 'Data saved successfully!', id: savedPerson._id });
    } catch (err) {
        console.error('Error inserting data:', err.message);
        res.status(500).json({ message: 'Error saving data.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
