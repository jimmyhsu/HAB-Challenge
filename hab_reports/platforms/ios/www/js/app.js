angular.module('main', ['ionic', 'main.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //StatusBar.styleDefault();
  });
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	// setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    .state('login', {
      url: '/login',
      views: {
        'login': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

	$urlRouterProvider.otherwise('/');
});
