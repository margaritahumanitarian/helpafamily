# Instructions for Contributors

Want to contribute to this repo? That's great! These instructions will help you contribute.

## Be Kind

- Always be kind and have empathy for others.
- Follow the [GitHub code of conduct](https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md).
- Be patient, as this is a volunteer-driven project.

## Stuck? Need Help?

- Post a comment on the GitHub issue you're working on, with details about where you got stuck.
- If no issue applies to your situation, you can create a new [GitHub issue](https://github.com/margaritahumanitarian/helpafamily/issues).
- You can also ask for help in the [Margarita Humanitarian Foundation chat room on Element](https://app.element.io/#/room/#mhf:matrix.org)

## Contribution Workflow

1. Please follow the [Installation](#installation) steps.
2. Please create a new branch and name it with the changes you are making. E.g. `fix-card-sort-order`
3. Make your code changes. You can preview your changes by [Running the project locally](#running-the-project-locally)
4. Run `yarn format` to ensure your code is following our linter and formatter rules. You may have to fix some linting issues manually.
5. Send us a pull request.

Please ensure your repository is up to date before making a pull request, this project is very active so something may have been changed already! [Learn to sync your branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch).

We will then review your pull request, during this process you may receive feedback and questions about your request.

We may request or make changes where necessary. Feedback will always be kind, considerate, and constructive! We are very grateful for all contributions!

## Installation

Fork this repo, then:

```
git clone <url-to-your-fork-of-helpafamily-here>
cd helpafamily/
cp .env.example .env
```

Then, 

### If you're familiar with Docker:
`<docker-compose build>` (it builds the docker container - needed only the first time or whenever the container gets removed)


### If you don't wish to use Docker:
`<yarn install>`

## Running the project locally

### without Docker

Once you have finished the [Installation](#installation) process you can run the project with

```
yarn dev
```

### with Docker
`<docker-compose up>` (it runs the app inside the container)

and opening [http://127.0.0.1:3000](http://127.0.0.1:3000)

## FAQ

### I contributed. Can I use this project in my coding portfolio?

Yes, absolutely! Contributors are certainly allowed to:

- List their contributions on their resumes
- Pin or feature this repo on their GitHub profiles
- Put the project on their portfolio websites as something they contributed to
- Share this repo as an example of something they contributed to
- Say on LinkedIn that they did volunteer work for Margarita Humanitarian Foundation
- Refer to this project in any other way that is honest and ethical

We do have strict ethical standards. Contributors aren't allowed to:

- Remove commit history and say they created the project entirely themselves
- Do anything unethical or dishonest with the project
