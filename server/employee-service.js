const Employee = require('./employee-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const { name } = req.params;
  const docquery = Employee.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(employees => {
      res.json(employees);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { name, age, department, title, location } = req.body;
  const employee = new Employee({ name, age, department, title, location });
  employee
    .save()
    .then(() => {
      res.json(employee);
    })
    .catch(err => {
      console.log (err);
      res.status(500).send(err);
    });
}

function search(req, res) {
  const { name } = req.params;
  const docquery = Employee.find({'name':name}).read(ReadPreference.NEAREST);; 
  
  docquery
    .exec()
    .then(employees => {
      res.json(employees);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { _id, name, age, department, title, location } = req.body;

  Employee.findOne({ _id })
    .then(employee => {
      employee.name = name;
      employee.age = age;
      employee.department = department;
      employee.title = title;
      employee.location = location;
      employee.save().then(res.json(employee));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { _id } = req.params;

  Employee.findOneAndRemove({ _id })
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy, search };
