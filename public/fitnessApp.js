(function() {
  'use strict';

  angular.module('FitnessApp', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MainRouter($stateProvider, $urlRouterProvider) {
    // Routes
    $stateProvider.state('workout', {
      url: '/',
      templateUrl: 'views/workout.html'
    })
    .state('planner', {
      url: '/planner',
      templateUrl: 'views/planner.html'
    })
    .state('history', {
      url: '/history',
      templateUrl: 'views/history.html'
    });

    $urlRouterProvider.otherwise('/');
  }

}());
