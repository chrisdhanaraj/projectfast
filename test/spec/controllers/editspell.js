'use strict';

describe('Controller: EditspellCtrl', function () {

  // load the controller's module
  beforeEach(module('projectfastApp'));

  var EditspellCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditspellCtrl = $controller('EditspellCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
