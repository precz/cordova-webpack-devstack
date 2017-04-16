module.exports = {

  'Main screen test': function (browser) {
    browser
      .url('http://localhost:8080/')
      .assert.containsText('h1', 'CORDOVA + WEBPACK')
      .assert.title('Cordova + Webpack')
      .assert.visible('.received')
      .assert.hidden('.listening')
      .resizeWindow(400, 600)
      .pause(1000)
      .saveScreenshot('tmp/tests/screenshot/main.png')
      .end();
  }
};
