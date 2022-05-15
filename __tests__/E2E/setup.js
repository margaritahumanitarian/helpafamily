// Porto, 2022
// This code was made with love by Francisco Bastos (https://www.linkedin.com/in/francisco-bastos-031369160/)
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
var assert = require('assert'),
  webdriver = require('selenium-webdriver');
// This is just a simple test to see if selenium can communicate with chrome.
describe('Verify setup with Google Search', function () {
  it('test case should work', function () {
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('selenium node automation');
    searchBox.getAttribute('value').then(function (value) {
      assert.equal(value, 'selenium node automation');
    });
    driver.quit();
  });
});
