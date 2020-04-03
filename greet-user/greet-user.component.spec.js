describe('greetUser', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('greetUser'));

  // Test the controller
  describe('greetUser', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('greetUser');

      expect(ctrl.user).toBe('world');
    }));

  });

});