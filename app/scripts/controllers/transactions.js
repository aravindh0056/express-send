'use strict';

/**
 * @ngdoc function
 * @name expressSendApp.controller:AboutCtrl
 * @description
 * # TransactionsCtrl
 * Controller of the expressSendApp
 */

 var transactionCtrl = angular.module('expressSendApp');

 transactionCtrl.factory(
            "Transaction",
            function( ) {
                // Define the constructor function.
                function Transaction( ) {
                	console.log("test");
                }

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

                // Return constructor - this is what defines the actual
                // injectable in the DI framework.
                return Transaction;
            }
        );


 transactionCtrl.controller( 'TransactionsCtrl', function( $scope, $location, $http, Transaction ) {

        $http.get('http://localhost:4000/transactions').
        success(function(data) {
        	var transactions = [];
        	
        	for(var i=0;i<data.length;i++) {
        		var transaction = new Transaction();
        		transaction.date = data[i].date;
        		transaction.name = data[i].name;
        		transaction.amount = data[i].amount;
        		transactions.push(transaction);
        	}

        	$scope.transactions = transactions;
        });
    }
    );
