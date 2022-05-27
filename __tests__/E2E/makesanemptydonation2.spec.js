// Porto, 2022
// This code was made with love by Francisco Bastos (https://www.linkedin.com/in/francisco-bastos-031369160/)
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
const { By } = require('selenium-webdriver'),
  webdriver = require('selenium-webdriver');

describe('Makes an empty donation 2', function () {
  let driver;
  // eslint-disable-next-line no-unused-vars
  let vars;

  beforeEach(async function () {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  jest.setTimeout(60000);
  it('Makes an empty donation 2', async function () {
    // Test name: Makes an empty donation 2
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    // 3 | click | xpath=//div[@id='__next']/div/main/div/div[2]/div/div/div[3]/form/div/div[5]/select |
    await driver
      .findElement(
        By.xpath(
          "//div[@id='__next']/div/main/div/div[2]/div/div/div[3]/form/div/div[5]/select"
        )
      )
      .click();
    // 4 | click | xpath=//select |
    await driver.findElement(By.xpath('//select')).click();
    // 5 | select | xpath=//html/body/div[2]/div/main/div[1]/div[2]/div/div/div[3]/form/div/div[5]/select/option[2] | label=$5
    {
      const dropdown = await driver.findElement(
        By.xpath(
          '/html/body/div[1]/div/main/div[1]/div[2]/div/div/div[3]/form/div/div[5]/select/option[2]'
        )
      );
      await dropdown.findElement(By.xpath("//option[. = '$5']")).click();
    }
    // 6 | click | xpath=//form/div/button |
    await driver.findElement(By.css('.btn-accent:nth-child(7)')).click();
    // 7 | webdriverChooseOkOnVisibleConfirmation | xpath=//body/div[4]/div/div |
    // await driver.switchTo().alert().accept();
  });
});
