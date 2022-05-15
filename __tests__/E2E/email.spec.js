// Porto, 2022
// This code was made with love by Ana Rita
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('email', function () {
  jest.setTimeout(30000);
  let driver;
  // eslint-disable-next-line no-unused-vars
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it('email', async function () {
    // Test name: email
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1792x1016 |
    await driver.manage().window().setRect({ width: 1792, height: 1016 });
    // 3 | click | linkText=Give Your Time |
    await driver.findElement(By.linkText('Give Your Time')).click();
    // 4 | click | css=.btn:nth-child(1) |
    await driver.findElement(By.css('.btn:nth-child(1)')).click();
    // 5 | assertText | css=.btn:nth-child(1) | Donate
    assert(
      (await driver.findElement(By.css('.btn:nth-child(1)')).getText()) ==
        'Donate'
    );
  });
});
