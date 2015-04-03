var transactions = [];

exports.createTransactions = function( req, res ) {
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    var today = dd+'/'+mm+'/'+yyyy;

	for(var i=0; i < 300; i++) {
		console.log(i);
		var transaction = {};
		transaction.date = today;
		transaction.name = "A" + i;
		transaction.amount = i;
		transactions.push(transaction);
	}
};

exports.getTransactions = function(req, res) {
	var fetchCount = Number(req.query.fetchCount);
	var fetchIndex = Number(req.query.fetchIndex);
	console.log(fetchCount)
	console.log(fetchIndex + fetchCount);
	console.log(transactions.slice(fetchIndex, fetchIndex + fetchCount))
	res.send(transactions.slice(fetchIndex, fetchIndex + fetchCount));
}
