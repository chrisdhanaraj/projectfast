'use strict';

angular.module('projectfastApp')
  .controller('SingleSpellCtrl', function ($scope, $http, $routeParams) {
	$http.get('/spells/' + $routeParams.id).success(function(Spells) {
      $scope.Spells = Spells;
    });
});