# CES REPORT
## The issue

This issue is trying to obtain [a code coverage of 80%](https://github.com/margaritahumanitarian/helpafamily/issues/367) on the [helpafamily.margaritahumanitarian.org](https://helpafamily.margaritahumanitarian.org/) project code. The Margarita Humanitarian Foundation is a 501c3 nonprofit public charity located in Palmdale, California (USA) that provides free assistance for people in need. They offer many services such as youth mentorship, health, career, and education workshops and training so the less fortunate can get access to social services, healthcare, food, and more aid in the golden state. Its mission is to develop high-impact ways to help underserved and marginalized groups. Their portfolio contains some programs in the Antelope Valley region and globally. They help families who need help the most, addressing the whole family's needs, from youths to elders, always with kindness and love.
It is possible to learn more about the project on the [website](https://www.margaritahumanitarian.org/).

### How alive is the project?

The project started in July of 2021. In the early stages of development, it has seen an early spike in activity. However, now it shows signs of a gradual [fade out](https://github.com/margaritahumanitarian/helpafamily/graphs/contributors) (as of the writing of this report). The project has 54 stars on GitHub and a community of 59 contributors. It also has 20 open issues and roughly 124 closed ones, with 95 forks. Despite not being a massive project, the authors of this report considered it an exciting project, and it is a way to help others in need using our skillset and field of study.

![Commit contributions](https://user-images.githubusercontent.com/44166746/168834968-bcd298c5-a440-40f8-ae39-92853503c1e3.png)

### How important is it?

There are undeniable advantages to testing software products; therefore, the authors will not enumerate them here. At the time of the fork, the project only contained a few set tests. The main goal of the issue is to get to 80% code coverage, so we developed one main **task plan** and a **test plan** - in this section, we will primarily focus on the task plan since the authors of this report will address the test plan later on. We will start by implementing end-to-end tests with Selenium IDE and Jest. This setup allows us to test the main features of the web application - so we can maximize the test coverage with the time constraints that we have. In the second stage of the testing project, we intend to start to test the main modules of the project in order of criticality - also to prevent an invisible path problem situation. We aim to help the Margarita Humanitarian Foundation provide its user base with a web application that guarantees no failure with this approach, so they can continue to help their community.

### What is it good for?

The main goal of this project is to provide ways for donors to help families in the Antelope Valley via an easy-to-use web application that allows them to make donations and contact some partners.

### What are the technologies involved?

The project's technology stack consists of React, Next.js, Tailwind CSS, and daisyUI Tailwind CSS Components. However, we used [Selenium.js](https://www.selenium.dev) with [Jest](https://jestjs.io) for the test framework to perform end-to-end test of the application on Chrome. For package managers, the project used NPM and Yarn.
In conclusion, this project uses:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [daisyUI Tailwind CSS Components](https://daisyui.com/)
- [Jest](https://jestjs.io)
- [Selenium.js](https://www.selenium.dev)

### Is the project in a development phase or maintenance/evolution phase?

We assume that the project is still in the development stage - because the main contributors did not yet implement some modules, and there are still some open issues. But, the number of commits is declining. So we assume that the project is in the development phase, but it is slowing down - a common issue with open-source projects, sometimes, they can freeze for a while.

### Community

The core contributors also have a [Discord server](https://discord.gg/WsmqrcGqyE) with some community members. However, there are two disclaimers. The first disclaimer is that the community is made up of people worldwide, so there is no standard timetable on which the community is online. The second disclaimer is that they are *"getting started,"* so it is expected not to exist as much activity on the server.

## Requirements
## Design
### Test plan

One of the best forms of test documentation there is the test plan. We used a variation of the IBM test plan model. According to the IBM documentation, the test plan describes the scope of the overall test effort and provides a record of the test planning process. Typically, a test plan identifies requirements, risks, test cases, the test environments, business and quality objectives, test schedules, and other items. However, the test plan had to have some adaptations to enable the application of restrictions imposed by the nature of the language and project. 

The test plan consists of six columns - Scenario, Steps, Tester Name, Approval Criteria, Actual result, and Final result. The Scenario, Tester Name, Approval Criteria, Actual, and Final results attributes are self-explanatory, but the attribute *"Steps"* come from BDD. The Steps attributes must contain a sequence of steps that allows us to conduct a test on the webpage. For example, *"Open the browser," "click on ...," "Fill in the payment form,"* and other actions that combined make an acceptance test.

Another essential detail is that these tests were tailored-made for a computer (MacOs) with the web browser Chrome. It is possible to conduct these tests on Firefox, Safari, Opera, and other significant browsers, OSs, and devices, however, we did not perform them due to time and infrastructure limitations. To do so we needed to use a Selenium Grid and create some system configurations, for example, a Linux PC with Firefox, a Windows PC with Microsoft Edge, a iPhone with Chrome. Some of this enviorments need payed liceses. Configur and allocate this network would cost valuable time and (maybe) monetary resources, defeating the purpose of the curriculum unit. In the future, if the charity association picks up and requires more "heavy-weight" tests to ensure a higher level of code quality, it is possible to assemble such infrastructure at some expense - time and resources manly. It is possible to find the test plan on the following [link](https://1drv.ms/x/s!AlSqQ8H6UyqqmfoxHBitd6JypCfwuw?e=OIHu26).

### Source code files
The main source code files to fixe these issues are the following:

![Issue code files](https://user-images.githubusercontent.com/44166746/168874151-67eaa8a3-809d-4f3d-ba20-5f72e752b743.png)

Note: Some dependencies needed to be added; that is why the package.json and yarn.lock files were also altered.

### Fix source code

We developed the test scripts with the help of Selenium IDE. The IDE allows us to perform capture and replay tests and then export the tests into JavaScript. However, the process is not as straightforward as it might first appear. After exporting the scripts, we needed to adjust the functions that find the web page elements. It is a common issue with Selenium. Selenium sometimes does not see the web page elements, especially if they are inside a combo box. Therefore, we need to search each element of the web page manually and find its exact location so that Selenium can see it. Another issue that we had during the development of the test scripts is that these tests run at CPU speeds. So they do not encompass the time that it takes for a web page to load or the time that a user takes when clicking on some element. Therefore, we adjusted the speed at which the tests run so they could wait for pages to load or for monetary transactions to take place. One final note that it is essential to mention is that the project had a *pretty* file built-in that obligated developers to follow a standard way to code. This configuration helps ensure the standardization of the contributions and provides quality standards across the project. Another aspect to consider when writing these tests is the configuration of the test environment — one of the reasons we had some initial problems when implementing the issue. We needed to align the Chrome version of our machines to the Chrome (web-driver) of the Selenium IDE; otherwise, it would not run. The readers can observe a test file below:
``` javascript
// Porto, 2022
// This code was made with love by Francisco Bastos (https://www.linkedin.com/in/francisco-bastos-031369160/)
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

describe('Make a donation', function () {
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
  it('Make a donation', async function () {
    // Test name: Make a donation
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    // 3 | click | xpath=//input |
    await driver.findElement(By.xpath('//input')).click();
    // 4 | click | xpath=//label[contains(.,'People of Color in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'People of Color in Need')]"))
      .click();
    // 5 | click | xpath=//label[contains(.,'Immigrants in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'Immigrants in Need')]"))
      .click();
    // 6 | click | xpath=//label[contains(.,'Seniors in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'Seniors in Need')]"))
      .click();
    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts({ implicit: 10000 });
    // 7 | click | xpath=//select |
    await driver.findElement(By.xpath('//select')).click();
    // 8 | select | css=#amount and xpath=//option[. = '$5'] | label=$5
    {
      const dropdown = await driver.findElement(By.css('#amount'));
      await dropdown.findElement(By.xpath("//option[. = '$5']")).click();
    }
    // 9 | click | xpath=//form/div/button[2] |
    await driver.findElement(By.xpath('//form/div/button[2]')).click();
    // 10 | click | xpath=//input[@id='email'] |
    await driver.findElement(By.xpath("//input[@id='email']")).click();
    // 11 | type | xpath=//input[@id='email'] | francisco@gmail.com
    await driver
      .findElement(By.xpath("//input[@id='email']"))
      .sendKeys('francisco@gmail.com');
    // 12 | click | xpath=//div[@id='cardNumber-fieldset']/div/div/div/span/input |
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div/div/div/span/input")
      )
      .click();
    // 13 | type | xpath=//fieldset/div/div/div/div/span/input | 6011 1111 1111 1117
    await driver
      .findElement(By.xpath('//fieldset/div/div/div/div/span/input'))
      .sendKeys('6011 1111 1111 1117');
    // 14 | type | xpath=//div[@id='cardNumber-fieldset']/div[2]/div/div/span/input | 11 / 26
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[2]/div/div/span/input")
      )
      .sendKeys('11 / 26');
    // 15 | type | xpath=//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input | 123
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input")
      )
      .sendKeys('123');
    // 16 | type | xpath=//div[3]/div/div/div/div/div[2]/div/div/div/div/span/input | Francisco
    await driver
      .findElement(
        By.xpath('//div[3]/div/div/div/div/div[2]/div/div/div/div/span/input')
      )
      .sendKeys('Francisco');
    // 17 | click | xpath=//div[3]/div/div/span/input |
    await driver.findElement(By.xpath('//div[3]/div/div/span/input')).click();
    // 18 | click | xpath=//div[@id='root']/div/div/div[2]/div/div[2]/form/div[2]/div[2]/button/div[3] |
    await driver
      .findElement(
        By.xpath(
          "//div[@id='root']/div/div/div[2]/div/div[2]/form/div[2]/div[2]/button/div[3]"
        )
      )
      .click();
    // 19 | waitForElementPresent | xpath=//h1[contains(.,'Thank You!')] | 60000
    await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(.,'Thank You!')]")),
      60000
    );
    // 20 | assertText | //*[@id="__next"]/html/body/div/div[1]/div/div/h1 | Thank You!
    assert(
      (await driver
        .findElement(
          By.xpath('//*[@id="__next"]/html/body/div/div[1]/div/div/h1')
        )
        .getText()) == 'Thank You!'
    );
  });
});
```
This test file portrays the test "Make a donation," and it is pretty simple to read (one of the advantages of Selenium IDE).
In the following section, we create the test environment. We extend the test timeout to roughly 16.(6)h, so the test has time to execute. Then we initialize and create the Chrome Driver and set the behavior for after the test - quit and close the browser:
```javascript
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
```

Now we access the web page and then start the search for each element of the web page filling in every form and simulating a typical user flow.
``` javascript
it('Make a donation', async function () {
    // Test name: Make a donation
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    // 3 | click | xpath=//input |
    await driver.findElement(By.xpath('//input')).click();
    // 4 | click | xpath=//label[contains(.,'People of Color in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'People of Color in Need')]"))
      .click();
    // 5 | click | xpath=//label[contains(.,'Immigrants in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'Immigrants in Need')]"))
      .click();
    // 6 | click | xpath=//label[contains(.,'Seniors in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'Seniors in Need')]"))
      .click();
    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts({ implicit: 10000 });
    // 7 | click | xpath=//select |
    await driver.findElement(By.xpath('//select')).click();
    // 8 | select | css=#amount and xpath=//option[. = '$5'] | label=$5
    {
      const dropdown = await driver.findElement(By.css('#amount'));
      await dropdown.findElement(By.xpath("//option[. = '$5']")).click();
    }
    // 9 | click | xpath=//form/div/button[2] |
    await driver.findElement(By.xpath('//form/div/button[2]')).click();
    // 10 | click | xpath=//input[@id='email'] |
    await driver.findElement(By.xpath("//input[@id='email']")).click();
    // 11 | type | xpath=//input[@id='email'] | francisco@gmail.com
    await driver
      .findElement(By.xpath("//input[@id='email']"))
      .sendKeys('francisco@gmail.com');
    // 12 | click | xpath=//div[@id='cardNumber-fieldset']/div/div/div/span/input |
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div/div/div/span/input")
      )
      .click();
    // 13 | type | xpath=//fieldset/div/div/div/div/span/input | 6011 1111 1111 1117
    await driver
      .findElement(By.xpath('//fieldset/div/div/div/div/span/input'))
      .sendKeys('6011 1111 1111 1117');
    // 14 | type | xpath=//div[@id='cardNumber-fieldset']/div[2]/div/div/span/input | 11 / 26
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[2]/div/div/span/input")
      )
      .sendKeys('11 / 26');
    // 15 | type | xpath=//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input | 123
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input")
      )
      .sendKeys('123');
    // 16 | type | xpath=//div[3]/div/div/div/div/div[2]/div/div/div/div/span/input | Francisco
    await driver
      .findElement(
        By.xpath('//div[3]/div/div/div/div/div[2]/div/div/div/div/span/input')
      )
      .sendKeys('Francisco');
    // 17 | click | xpath=//div[3]/div/div/span/input |
    await driver.findElement(By.xpath('//div[3]/div/div/span/input')).click();
    // 18 | click | xpath=//div[@id='root']/div/div/div[2]/div/div[2]/form/div[2]/div[2]/button/div[3] |
    await driver
      .findElement(
        By.xpath(
          "//div[@id='root']/div/div/div[2]/div/div[2]/form/div[2]/div[2]/button/div[3]"
        )
      )
      .click();
```

The following instructions show that we need to extend the time for the test to run even for specific actions. We rose the timeout again for 60000 seconds.
```javascript
// 19 | waitForElementPresent | xpath=//h1[contains(.,'Thank You!')] | 60000
    await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(.,'Thank You!')]")),
      60000
    );
```

Now we test the web page and try to assert the web page's content with the message "Thank You!" which means that a donation was correctly made.
```javascript
// 20 | assertText | //*[@id="__next"]/html/body/div/div[1]/div/div/h1 | Thank You!
    assert(
      (await driver
        .findElement(
          By.xpath('//*[@id="__next"]/html/body/div/div[1]/div/div/h1')
        )
        .getText()) == 'Thank You!'
    );
```

The remaining tests follow a structure very similar to this one.

## Submit the fix

We submitted a pull request to the project's GitHub, which the reader can find [here](https://github.com/margaritahumanitarian/helpafamily/pull/373). At the time of the writing of this report, it has not been yet approved and merged - maybe due to the recent inactivity of the main contributors; however, we hope it will be soon because we think that it is an excellent contribution to the project.

## Contributors

<a href="https://github.com/margaritahumanitarian/helpafamily/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=margaritahumanitarian/helpafamily" />
</a>

[![Powered by Vercel](public/images/powered-by-vercel.svg)](https://vercel.com?utm_source=margaritahumanitarian&utm_campaign=oss)
