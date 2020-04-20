describe('PhoneCat Application', function() {

  describe('phoneList', function() {

    beforeEach(function() {
      browser.get('#!/phonelist');
    });

    it('should filter the phone list as a user types into the search box', function() {
      var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
	
	it('should order according to input',function(){
	  var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));
	  var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
	  
	 
	  
	  function getNames() {
        return phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
      }
	  
      expect(getNames()).toEqual([
	    'Nexus S',
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);
	  
	  nameOption.click();
	  
	  expect(getNames()).toEqual([
	    'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi',
        'Nexus S'
      ]);
	  
	});

  });
  
  //TESTS FOR THE DYNAMIC LIST
  describe('dynamicPhoneList', function(){
	beforeEach(function() {
      browser.get('#!/dynamicphonelist');
    });
	it('should render phone specific links', function() {
		var query = element(by.model('$ctrl.queryDynamic'));
		query.sendKeys('nexus');

		element.all(by.css('.phonesDynamic li a')).first().click();
		expect(browser.getCurrentUrl()).toContain('#!/phonedetail/nexus-s');
	});
  });

  //SHOW PHONE DETAILS
  describe('View: Phone detail', function() {

    beforeEach(function() {
      browser.get('#!/phonedetail/nexus-s');
    });
  
    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.phone.name')).getText()).toBe('Nexus S');
    });
	
	it('should display the first phone image as the main phone image', function() {
      var mainImage = element(by.css('img.phone'));

      expect(mainImage.getAttribute('src')).toContain('img/phones/nexus-s.0.jpg');
    });

	 it('should swap the main image when clicking on a thumbnail image', function() {
      var mainImage = element(by.css('img.phone'));
      var thumbnails = element.all(by.css('.phone-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toContain('img/phones/nexus-s.2.jpg');

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toContain('img/phones/nexus-s.0.jpg');
    });
  });


}); 
