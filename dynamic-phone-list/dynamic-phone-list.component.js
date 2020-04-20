angular.
  module('dynamicPhoneList').
  component('dynamicPhoneList', {
    templateUrl: 'dynamic-phone-list/dynamic-phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.dynamicPhones = Phone.query();
        this.orderProp = 'name';
      }
    ]
  });
