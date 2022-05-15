// Porto, 2022
// This code was made with love by Francisco Bastos (https://www.linkedin.com/in/francisco-bastos-031369160/)
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
import { Builder, By } from 'selenium-webdriver';
import assert from 'assert';

describe('Hot meal learn more', function () {
  jest.setTimeout(60000);
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
  it('Hot meal learn more', async function () {
    // Test name: Hot meal learn more
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    // 3 | click | xpath=//button[contains(.,'Learn More')] |
    await driver
      .findElement(By.xpath("//button[contains(.,'Learn More')]"))
      .click();
    // 4 | assertText | xpath=//h1/div | Free Food Boxes for Hungry Families. Every Saturday!
    assert(
      (await driver.findElement(By.xpath('//h1/div')).getText()) ==
        'Free Food Boxes for Hungry Families. Every Saturday!'
    );
  });
});
