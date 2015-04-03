function Transaction() {}

Transaction.prototype = {
    date: "",
    firstName: "",
    LastName: "",
    amount: 0,
    name: "",

    getDateOfTransaction : function() {
       	return this.date;
    },

    getName: function() {
        return this.name;
    },

    getFullName: function() {
        return this.firstName + " " + this.LastName;
    },

    getAmount: function() {
        return this.amount;
    }
};                    	   	

module.exports = Transaction

                