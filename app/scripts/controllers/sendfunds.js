'use strict';

/**
 * @ngdoc function
 * @name expressSendApp.controller:SendFundsCtrl
 * @description
 * # SendFundsCtrl
 * Controller of the expressSendApp
 */
angular.module('expressSendApp')
  .controller('SendFundsCtrl', function ($scope, $location) {
  	var inputCtrls = [{
  						name 	 : 'amount',
  						type 	 : 'number',
  						text	 : 'Amount',
  						required : true
  					  }, 
  					  {
  					  	name 	 : 'email',
  					  	type 	 : 'email',
  					  	text	 : 'Email Address',
  					  	required : true
  					  },
  					  {
  					  	name : 'message',
  					  	text : 'Message',
  					  	type : 'text'
  					  }];    

    $scope.validateAndSend = function() {
    	var invalid = false;
    	var invalidInputs = [];
    	for(var i=0;i<inputCtrls.length;i++) {
    		var inputCtrl = inputCtrls[i];
    		var type = inputCtrl.type;
    		var value = $scope[inputCtrl.name];
    		if(inputCtrl.required && (value == "" || value == undefined)) {
    			invalid = true;
    			invalidInputs.push(inputCtrl.text)
    			continue;
    		}

    		if(!invalid) {
    			switch (type) {
    			case 'number':
    				value = Number(value);
    				if(isNaN(value) || typeof value !== 'number') {
    					invalid = true; 
    					invalidInputs.push(inputCtrl.text);
    				}
    				break;
    			case 'email':
    				var regex = /\S+@\S+\.\S+/;
    				invalid = !regex.test(value);
    				break;
    			default:
    				break;	
    			}
    		}
    	}

    	if(!invalid) {
    		$location.path( '/transactions' );
    	}
    	else {
    		console.log(invalidInputs);
    	}
    }

    $scope.clear = function() {
    	for(var i=0;i<inputCtrls.length;i++) {
    		var inputCtrl = inputCtrls[i];
    		$scope[inputCtrl.name] = "";
    	}
    }
  });
