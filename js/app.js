angular.module('miniRouting', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('settings', {
      templateUrl: 'settings/settings.html',
      controller: 'settingsController',
      url: '/settings'
    })
    .state('product', {
      templateUrl: 'products/products.html',
      controller: 'productsController',
      url: '/products/:id'
    })

    $urlRouterProvider
      .otherwise('/');

});
