// Porto, 2022
// This code was made with love by Francisco Bastos (https://www.linkedin.com/in/francisco-bastos-031369160/)
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

describe('Hot meal donate', function () {
  var webdriver = require('selenium-webdriver');

  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

  jest.setTimeout(60000);
  // eslint-disable-next-line no-unused-vars
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it('Hot meal donate', async function () {
    // Test name: Hot meal donate
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    // 3 | click | xpath=//div[@id='__next']/div/main/div[2]/div/div/div/div/div/div/button |
    await driver
      .findElement(
        By.xpath(
          "//div[@id='__next']/div/main/div[2]/div/div/div/div/div/div/button"
        )
      )
      .click();
    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts({ implicit: 10000 });
    // 4 | click | xpath=//div[@id='email-fieldset']/div/div/div/div/span/input |
    await driver
      .findElement(
        By.xpath("//div[@id='email-fieldset']/div/div/div/div/span/input")
      )
      .click();
    // 5 | type | xpath=//div[@id='email-fieldset']/div/div/div/div/span/input | francisco@gmail.com
    await driver
      .findElement(
        By.xpath("//div[@id='email-fieldset']/div/div/div/div/span/input")
      )
      .sendKeys('francisco@gmail.com');
    // 6 | click | xpath=//div[@id='cardNumber-fieldset']/div/div/div/span/input |
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div/div/div/span/input")
      )
      .click();
    // 7 | type | xpath=//fieldset/div/div/div/div/span/input | 6011 1111 1111 1117
    await driver
      .findElement(By.xpath('//fieldset/div/div/div/div/span/input'))
      .sendKeys('6011 1111 1111 1117');
    // 8 | type | xpath=//div[2]/div/div/span/input | 11 / 26
    await driver
      .findElement(By.xpath('//div[2]/div/div/span/input'))
      .sendKeys('11 / 26');
    // 9 | type | xpath=//div[@id='billingName-fieldset']/div/div/div/span/input | Francisco
    await driver
      .findElement(
        By.xpath("//div[@id='billingName-fieldset']/div/div/div/span/input")
      )
      .sendKeys('Francisco');
    // 10 | click | xpath=//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input |
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input")
      )
      .click();
    // 11 | type | xpath=//div[3]/div/div/span/input | 123
    await driver
      .findElement(By.xpath('//div[3]/div/div/span/input'))
      .sendKeys('123');
    // 12 | click | xpath=//button/div[3] |
    await driver.findElement(By.xpath('//button/div[3]')).click();
    // 13 | waitForElementPresent | xpath=//h1[contains(.,'Thank You!')] | 60000
    await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(.,'Thank You!')]")),
      60000
    );
    // 14 | assertText | //*[@id="__next"]/html/body/div/div[1]/div/div/h1 | Thank You!
    assert(
      (await driver
        .findElement(
          By.xpath('//*[@id="__next"]/html/body/div/div[1]/div/div/h1')
        )
        .getText()) == 'Thank You!'
    );
  });
});
