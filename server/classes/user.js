function User() {}

User.prototype = {
    id: "",
    firstName: "",
    LastName: "",
    age: "",
    email: "",

    getDateOfTransaction : function() {
       	return this.date;
    },

    getemail: function() {
        return this.email;
    },

    getFullName: function() {
        return this.firstName + " " + this.LastName;
    }
};                    	   	

module.exports = User

                