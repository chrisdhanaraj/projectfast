'use strict';

angular.module('projectfastApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
