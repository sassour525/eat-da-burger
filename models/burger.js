var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertOne: function(valToInsert, cb) {
		orm.insertOne('burgers', 'burger_name', valToInsert, function(res) {
			cb(res);
		});
	},
	updateOne: function(rowId, cb) {
		orm.updateOne('burgers', 'devoured', true, rowId, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;