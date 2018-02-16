const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    name: String,
    age: Number,
    department: String,
    title: String,
    location: String,
});

const Employee = mongoose.model('Employees', employeeSchema);
module.exports = Employee;