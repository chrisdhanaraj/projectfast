'use strict';

angular.module('projectfastApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/spells').success(function(Spells) {
      $scope.Spells = Spells;
    });
  });