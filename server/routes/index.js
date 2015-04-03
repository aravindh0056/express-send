'use strict';

// Dependencies
var server = require( './../server' ).server;
var main = require( './main' );

// Router
// Index route - usually served as static via express
server.get( '/', main.createTransactions );

// Example route
server.get( '/route/:route', require( './example' ) );

server.get( '/transactions', main.getTransactions);

server.post( '/transactions', main.postTransaction);

// Example database route
//server.get( '/db', require( '../db/example' ) );

// Catch all
server.get( '*', main.createTransactions );
main.createTransactions();
main.createUsers();


