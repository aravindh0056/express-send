'use strict';

/**
 * @ngdoc overview
 * @name expressSendApp
 * @description
 * # expressSendApp
 *
 * Main module of the application.
 */

angular.module( 'expressSendApp', [ 
    'ngCookies',
    'ngResource',
    'ngRoute'
    ])
    .config( [ '$routeProvider', '$locationProvider', function ( $routeProvider, $locationProvider ) {
        $routeProvider
        .when( '/', {
            // @todo fix this
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when( '/about', {
            // @todo fix this
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when( '/send', {
            // @todo fix this
            templateUrl: 'views/sendfunds.html',
            controller: 'SendFundsCtrl'
        })
        .when( '/success', {
            // @todo fix this
            templateUrl: 'views/success.html',
            controller: 'SendFundsCtrl'
        })
        .when( '/transactions', {
            // @todo fix this
            templateUrl: 'views/transactions.html',
            controller: 'TransactionsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode( true );
    }]);

//create namespace

window.com = {
  expresssend : {}
};
