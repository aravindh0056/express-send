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
                function Transaction( ) {}

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

                return Transaction;
            }
        );


 transactionCtrl.controller( 'TransactionsCtrl', function( $scope, $location, $window, $http, Transaction ) {
        var transactions = [];
        $scope.loading = true;
        setTimeout(sendRequest, 3000);

        $("#tblbody").scroll( function() {
          if($(this)[0].scrollHeight - $(this).scrollTop() == $(this).outerHeight()) {
            $scope.loading = true;
            setTimeout(sendRequest, 3000);
          }
        });

        function sendRequest() {
                var url = 'http://localhost:4000/transactions';
                url += '?fetchCount=30&fetchIndex=' + (transactions.length + 1);
                $http.get(url)
                .success(function(data) {
                    for(var i=0;i<data.length;i++) {
                        var transaction = new Transaction();
                        transaction.id = data[i].id;
                        transaction.date = data[i].date;
                        transaction.name = data[i].name;
                        transaction.amount = data[i].amount;
                        transactions.push(transaction);
                    }

                    $scope.transactions = transactions;
                    $scope.loading = false;
                });
        }

        $scope.revealData = function(transaction) {
            $scope.transactionDetails = transaction;
            var details = angular.element('#transactionDetailsModal');
            details.modal('show');
        }

        $scope.router = function(route) {
            $window.history.back();
        }
    }
    );
