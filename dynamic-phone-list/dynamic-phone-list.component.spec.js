describe('dynamicPhoneList', function() {
    //load module before each test
	beforeEach(module('dynamicPhoneList'));
	
	describe('dynamicPhoneList', function() {
		//load the controller 
		var $httpBackend, ctrl;
		
		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable withthesame name
        // as the service while avoiding a name conflict.
		beforeEach(inject(function($componentController,_$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
			ctrl = $componentController('dynamicPhoneList');
		}));
		
		
		 it('should create a `phones` property with 2 phones fetched with `$http`', function() {
			expect(ctrl.phones).toBeUndefined();

			$httpBackend.flush();
			expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
		});

		it('should set a default value for the `orderProp` model', function() {
			expect(ctrl.orderProp).toBe('name');
		});
		
	});
});