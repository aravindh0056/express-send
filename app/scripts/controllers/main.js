'use strict';

/**
 * @ngdoc function
 * @name expressSendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expressSendApp
 */
var mainCtrl = angular.module('expressSendApp');

 mainCtrl.factory(
            "Transaction",
            function( ) {
                // Define the constructor function.
                function Transaction( ) {
                	console.log("test");
                }

                Transaction.prototype = {
                    getFirstName: function() {
                    },

                    getFullName: function() {
                    }
                };

                // Return constructor - this is what defines the actual
                // injectable in the DI framework.
                return Transaction;
            }
        );

 mainCtrl.controller('MainCtrl', function ($scope, Transaction) {
 	var t1 = new Transaction();
    console.log(t1.getFirstName());
  });