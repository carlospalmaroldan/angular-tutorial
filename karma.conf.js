// Karma configuration
// Generated on Wed Apr 01 2020 16:11:55 GMT-0500 (GMT-05:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	 'lib/angular-1.7.0/angular.js',
   'lib/angular-1.7.0/angular-mocks.js',
   'lib/angular-1.7.0/angular-route.js',
   'lib/angular-1.7.0/angular-resource.js',
	 '../node_modules/angular-mocks/angular-mocks.js',
	 'app.module.js',
	 'phone-list/phone-list.module.js',	
	 'greet-user/greet-user.module.js',
	 'dynamic-phone-list/dynamic-phone-list.module.js',
	 'phone-detail/phone-detail.module.js',
	 'phone-detail/phone-detail.component.js',
	 'core/core.module.js',
	 'core/phone/phone.module.js',
	 'core/phone/phone.service.js',
	 'phone-list/phone-list.component.js',
	 'greet-user/greet-user.component.js',
	 'dynamic-phone-list/dynamic-phone-list.component.js',
	 'core/checkmark/checkmark.filter.js',
	 'core/checkmark/*.spec.js',
     'phone-list/*.spec.js',
	 'greet-user/*.spec.js',
	 'dynamic-phone-list/*.spec.js',
	 'phone-detail/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
	
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
