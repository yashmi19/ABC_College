const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    guardianContact: {
        type: String,
        required: true
    },
    admissionDate: {
        type: Date,
        required: true
    },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
