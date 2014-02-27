'use strict';

angular.module('projectfastApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .when('/allspells', {
        templateUrl: 'partials/allspells',
        controller: 'SpellsCtrl',
        authenticate: true
      })
      .when('/allspells/:id', {
        templateUrl: 'partials/singlespell',
        controller: 'SingleSpellCtrl',
      })
      .when('/allspells/:id/edit', {
        templateUrl: 'partials/editspell',
        controller: 'EditSpellCtrl',
        resolve: {
          spell: function(Restangular, $route){
            return Restangular.one('spells', $route.current.params.id).get();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
    
    RestangularProvider.setRestangularFields({
      id: '_id'
    });

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });