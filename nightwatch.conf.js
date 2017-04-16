//http://nightwatchjs.org/gettingstarted/#basic-settings

var SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone.jar',
  host: '127.0.0.1',
  port: 4444,
  log_path: false
};

var FIREFOX_CONFIGURATION = {
  browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost',
  selenium_port: 4444,
  selenium_host: 'localhost',
  desiredCapabilities: FIREFOX_CONFIGURATION
};

var ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['tests/functional'],
  output_folder: 'tmp/tests/functional.report',
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS
};
