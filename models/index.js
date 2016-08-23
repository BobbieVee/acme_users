var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/acme_users');

var User = db.define('user',{});
var Department = db.define('department', {});









module.exports = {
	User: User,
	Department: Department

};