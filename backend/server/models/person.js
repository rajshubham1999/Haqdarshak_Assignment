const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date },
    age: { type: Number},
    state: { type: String, required: true },
    district: { type: String, required: true },
    pincode: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Person', personSchema);
