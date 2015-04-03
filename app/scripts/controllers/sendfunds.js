'use strict';

/**
 * @ngdoc function
 * @name expressSendApp.controller:SendFundsCtrl
 * @description
 * # SendFundsCtrl
 * Controller of the expressSendApp
 */
angular.module('expressSendApp')
  .controller('SendFundsCtrl', function ($scope, $location, $http) {
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

    $scope.show = false;

    $scope.validateAndSend = function() {
    	var invalid = false;
    	var invalidInputs = [];
    	for(var i=0;i<inputCtrls.length;i++) {
    		var inputCtrl = inputCtrls[i];
    		var type = inputCtrl.type;
    		var value = $scope[inputCtrl.name];
    		if(inputCtrl.required && (value == "" || value == undefined)) {
    			invalid = true;
    			invalidInputs.push(inputCtrl.text + " is required");
    			continue;
    		}

    		if(!invalid) {
    			switch (type) {
    			case 'number':
    				value = Number(value);
    				if(isNaN(value) || typeof value !== 'number') {
    					invalid = true; 
    					invalidInputs.push(inputCtrl.text + " should be a number");
    				}
    				break;
    			case 'email':
    				var regex = /\S+@\S+\.\S+/;
    				invalid = !regex.test(value);
            invalidInputs.push(inputCtrl.text + " is invalid");
    				break;
    			default:
    				break;	
    			}
    		}
    	}

    	if(!invalid) {
        var url = 'http://localhost:4000/transactions';
        $http.post(url, {email : $scope.email})
            .success(function(data) {
                $location.path( '/success' );
            })
            .error(function(data) {
              invalidInputs = [];
              if(data.code == 1234) invalidInputs.push(data.message);
              else invalidInputs.push("Transaction failed");
              $scope.invalidInputs = invalidInputs;
              var error = angular.element('#transactionErrorModal');
              error.modal('show');
              console.log(data.message);
            });
    	}
    	else {
        var error = angular.element('#transactionErrorModal');
        error.modal('show');
        $scope.invalidInputs = invalidInputs;
        $scope.show = true;
    		console.log(invalidInputs);
    	}
    }

    $scope.getUserInfo = function() {
      console.log(invalidInputs);
    }

    $scope.clear = function() {
    	for(var i=0;i<inputCtrls.length;i++) {
    		var inputCtrl = inputCtrls[i];
    		$scope[inputCtrl.name] = "";
    	}
    }
  });
