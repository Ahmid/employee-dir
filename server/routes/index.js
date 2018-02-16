const express = require('express');
const router = express.Router();

const employeesService = require('../employee-service');

router.get('/employees', (req, res) => {
  employeesService.get(req, res);
});

router.get('/employee/search/:name', (req, res) => {
  employeesService.search(req, res);
});

router.post('/employee', (req, res) => {
  employeesService.create(req, res);
});

router.put('/employee', (req, res) => {
  employeesService.update(req, res);
});

router.delete('/employee/:_id', (req, res) => {
  employeesService.destroy(req, res);
});

module.exports = router;
