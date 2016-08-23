var express = require('express');
var models = require('../models/');

var User=models.User;
var Department= models.Department;

var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next){
	var depts;
	Department.findAll({})
	.then(function(departments){
		depts = departments;
	 	return Department.findDefaultDepartment()
	
	})
	.then(function(defDept){
		console.log('defDept.name =', defDept.name)
		res.render('departments', { title: 'Departments', 
			departments: depts, defDept: defDept.name
	})

	})
	.catch(next);
})