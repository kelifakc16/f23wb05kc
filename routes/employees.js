var express = require('express');
var router = express.Router();

/* GET home page. */
var results = [
    { employeeID: '123', officeLocation: 'Office A', yearsOfService: 5 },
    { employeeID: '456', officeLocation: 'Office B', yearsOfService: 3 },
    { employeeID: '789', officeLocation: 'Office C', yearsOfService: 7 }
  ];
router.get('/', function(req, res, next) {
    res.render('employees', { title: 'Employees List', results: results });
});

module.exports = router;

