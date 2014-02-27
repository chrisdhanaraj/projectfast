'use strict';

angular.module('projectfastApp')
.controller('SpellsCtrl', function ($scope, Restangular) {
  var baseSpells = Restangular.all('spells');
  
  baseSpells.getList().then(function (Spells) {
    $scope.Spells = Spells;
  });
});