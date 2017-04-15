module.exports = {
  'Main test': function (client) {
    client
      .url('http://localhost:8080/')
      .assert.containsText('h1', 'CORDOVA + WEBPACK')
      .end();
  }
};
