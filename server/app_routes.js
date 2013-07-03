'use strict';

var routesDir = '../routes/'
  ;

// Import the routes
var routes = {
  subscription: require(routesDir + 'subscription')
};

module.exports = function (app) {
  // Routes are defined here
  
  app.get('/', routes.subscription.index);
  
}