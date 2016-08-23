var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/acme_users');



console.log('index.js here!!!!!!!!!!!!!!!!!!!!')

var User = db.define('user',{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	DeptId: {
		type: Sequelize.INTEGER

	}
})

var Department = db.define('department', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	isDefault:{
		type: Sequelize.ENUM('true', 'false')
	}
}, {
classMethods: {
	findDefaultDepartment: function(){
		return this.findOne({
			where: { isDefault: 'true' }
		});
	}

}


});

Department.findOrCreate({
		where: {
			name: 'accounting',
			isDefault: 'true'
		}
	});



	Department.findOrCreate({
		where: {
			name: 'Factory',
			isDefault: 'false'
		}
	});

	User.belongsTo(Department);












module.exports = {
	User: User,
	Department: Department

};