exports.config = {
  framework: 'jasmine',
  baseUrl: 'http://localhost:8000/',
   specs: [
    '*.js'
  ],
  allScriptsTimeout: 11000,
   jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  capabilities: {
    'browserName': 'chrome'
  }
}