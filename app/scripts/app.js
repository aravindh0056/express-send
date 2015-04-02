'use strict';

/**
 * @ngdoc overview
 * @name paypalApp
 * @description
 * # paypalApp
 *
 * Main module of the application.
 */
angular
  .module('expressSendApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
