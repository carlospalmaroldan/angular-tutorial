angular.
  module('dynamicPhoneList').
  component('dynamicPhoneList', {
    templateUrl: 'dynamic-phone-list/dynamic-phone-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'name';
		
        $http.get('phones/phones.json').then(function(response) {
          self.phones = response.data;
        });
      }
    ]
  });
