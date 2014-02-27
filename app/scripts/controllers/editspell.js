'use strict';

angular.module('projectfastApp')
.controller('EditSpellCtrl', function ($scope, $routeParams, Restangular, spell) {
  var original = spell;
  $scope.spell = Restangular.copy(original);

  $scope.update = function() {
    $scope.spell.put();
  };
});

