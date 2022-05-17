# CES REPORT
## The issue

This issue is trying to obtain [a code coverage of 80%](https://github.com/margaritahumanitarian/helpafamily/issues/367) on the [helpafamily.margaritahumanitarian.org](https://helpafamily.margaritahumanitarian.org/) project code. The Margarita Humanitarian Foundation is a 501c3 nonprofit public charity located in Palmdale, California (USA) that provides free assistance for people in need. They offer many services such as youth mentorship, health, career, and education workshops and training so the less fortunate can get access to social services, healthcare, food, and more aid in the golden state. Its mission is to develop high-impact ways to help underserved and marginalized groups. Their portfolio contains some programs in the Antelope Valley region and globally. They help families who need help the most, addressing the whole family's needs, from youths to elders, always with kindness and love.
You can learn more about the project on the [website](https://www.margaritahumanitarian.org/).

### How alive is the project?

The project started in July of 2021. In the early stages of development, the project has seen an early spike in activity. However, it now shows signs of a gradual [fade out](https://github.com/margaritahumanitarian/helpafamily/graphs/contributors) (as of the writing of this report). The project has 54 stars on GitHub and a community of 59 contributors. It also has 20 open issues and roughly 124 closed ones, with 95 forks. Despite not being a massive project, the authors of this report considered it an exciting project, and it is a way to help others in need using our skillset and field of study.

![Commit contributions](https://user-images.githubusercontent.com/44166746/168834968-bcd298c5-a440-40f8-ae39-92853503c1e3.png)

### How important is it?

It is undeniable the advantages of testing software products; therefore, the authors will not enumerate them here. At the time of the fork, the project only contained a few set tests. The main goal of the issue is to get to 80% code coverage, so we developed one main task plan and a test plan. We will start by implementing end-to-end tests with Selenium IDE and Jest. This setup allows us to test the main features of the web application - so we can maximize the test coverage with the time constraints that we have. In the second stage of the testing project, we intend to start to test the main modules of the project in order of criticality - also to prevent an invisible path problem situation. We aim to help the Margarita Humanitarian Foundation provide its user base with a web application that guarantees no failure with this approach and improved quality, so they can continue to help their community.

### What is it good for?

The main goal of this project is to provide ways for donors to help families in the Antelope Valley - via an easy-to-use web application that allows them to make donations and contact some partners.

### What are the technologies involved?

The project's technology stack consists of React, Next.js, Tailwind CSS, and daisyUI Tailwind CSS Components. However, we used [Selenium.js](https://www.selenium.dev) with [Jest](https://jestjs.io) for the test framework to perform an end-to-end test of the application on Chrome. For package managers, the project used NPM and Yarn.
In conclusion, this project uses:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [daisyUI Tailwind CSS Components](https://daisyui.com/)
- [Jest](https://jestjs.io)
- [Selenium.js](https://www.selenium.dev)

### Is the project in a development phase or maintenance/evolution phase?

We assume that the project is still in the development stage - because the main contributors did not yet implement some modules, and there are still some open issues. But, the number of commits is declining, so we assume that the project is in the development phase, but it is still - a common issue with open-source projects; sometimes, they can freeze for a time.

### Community

The core contributors also have a [Discord server](https://discord.gg/WsmqrcGqyE) with some community members. However, there are two disclaimers — one to the fact that the community is made up of people worldwide. So there is no standard timetable on which the community is online. The second disclaimer is that they are getting started, so it is expected not to exist as much activity on the server as expected.

## Requirements
## Design
### Test plan

One of the best forms of test documentation there is the test plan. We used a variation of the IBM test plan model. According to the IBM documentation, the test plan describes the scope of the overall test effort and provides a record of the test planning process. Typically, a test plan identifies requirements, risks, test cases, the test environments, business and quality objectives, test schedules, and other items. However, the test plan had to have some adaptations to enable the application of restrictions imposed by the nature of the language and project. The test plan consists of six columns - Scenario, Steps, Tester Name, Approval Criteria, Actual result, and Final result. The Scenario, Tester Name, Approval Criteria, Actual, and Final results attributes are self-explanatory, but the attribute Steps come from BDD. The Steps attributes must contain a sequence of steps that allows us to conduct a test on the webpage. For example, Open the browser, click on ..., Fill in the payment form, and do other actions that combined make an acceptance test. Another essential detail is that these tests were tailored-made for a computer (MacOs) with the web browser Chrome. It is possible to conduct these tests on Firefox, Safari, Opera, significant browsers, OSs, and even devices. However, we did not perform them due to time limitations and infrastructure limitations. To do so, we needed to use a Selenium Grid and access some system configurations, for example, a Linux PC with Firefox and a Windows PC with Microsoft Edge. Only configuring and allocating this network would cost valuable time and (maybe) monetary resources, defeating the purpose of the curriculum unit. In the future, if the charity association picks up and requires more "heavy-weight" tests to ensure a higher level of accuracy, it is possible to assemble such infrastructure at some expense - time and resources manly. It is possible to find the test plan on the following [link](https://1drv.ms/x/s!AlSqQ8H6UyqqmfoxHBitd6JypCfwuw?e=OIHu26).

### Source code files
### Fix source code
## Submit the fix

We submitted a pull request to the project's GitHub, which the reader can find [here](https://github.com/margaritahumanitarian/helpafamily/pull/373). At the time of the writing of this report, it has not been yet approved and merged - maybe due to the recent inactivity of the main contributors; however, we hope it will be soon because we think that it is an excellent contribution to the project.

# helpafamily.margaritahumanitarian.org

## Contributors

<a href="https://github.com/margaritahumanitarian/helpafamily/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=margaritahumanitarian/helpafamily" />
</a>

[![Powered by Vercel](public/images/powered-by-vercel.svg)](https://vercel.com?utm_source=margaritahumanitarian&utm_campaign=oss)
