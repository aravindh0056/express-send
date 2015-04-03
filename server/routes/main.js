var Transaction = require('./../classes/transaction');
var User = require('./../classes/user')
var transactions = [];
var map = {};

exports.createTransactions = function() {
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    var today = dd+'/'+mm+'/'+yyyy;

	for(var i=0; i < 300; i++) {
		var transaction = new Transaction();
		transaction.id = i;
		transaction.date = today;
		transaction.name = "user" + i;
		transaction.amount = 1000 + i;
		transactions.push(transaction);
	}
}

exports.createUsers = function() {
	for(var i=0; i<10;i++) {
		var user = new User();
		user.age = 20 + i;
		user.name = "user" + i;
		user.email = "user" + i + "@gmail.com"
		map[user.email] = user;
	}
}

exports.getTransactions = function(req, res) {
	var fetchCount = Number(req.query.fetchCount);
	var fetchIndex = Number(req.query.fetchIndex);
	res.send(transactions.slice(fetchIndex, fetchIndex + fetchCount));
}

exports.postTransaction = function(req, res) {
	var email = req.body.email;
	var amount = req.body.amount;
	var user = map[email];
	
	if(user) {
		console.log(amount);
		res.send(200, {
			name : user.name,
			amount : amount,
			message : "success"
			});
	} else {
		res.send(404, {
			code : 1234,
			message : "User not found"
			});
	}
}