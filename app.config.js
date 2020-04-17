angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
	
      $routeProvider.
        when('/phonelist', {
          template: '<phone-list></phone-list>'
        }).
        when('/phonedetail/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
		when('/dynamicphonelist',{
			template: '<dynamic-phone-list></dynamic-phone-list>'
		});
    }
  ]);