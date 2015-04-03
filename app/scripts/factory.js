'use strict';


var myFactory = angular.module('MyFactory', [
    'ngResource'
]);
myFactory.factory('API', ['$resource', 'mainCtrl',
    function($resource, mainCtrl) {
        return {
            Transactions: $resource(mainCtrl.transactionUrl, {}, {
                'query': {
                    method: 'GET',
                    isArray: false
                },
                'post': {
                    method: 'POST'
                }
            })
        }
    }
]);