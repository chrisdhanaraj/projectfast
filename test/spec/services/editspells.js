'use strict';

describe('Service: editspells', function () {

  // load the service's module
  beforeEach(module('projectfastApp'));

  // instantiate service
  var editspells;
  beforeEach(inject(function (_editspells_) {
    editspells = _editspells_;
  }));

  it('should do something', function () {
    expect(!!editspells).toBe(true);
  });

});
