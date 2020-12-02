# Browser testing with Protractor, Typescript, and Selenium

### Setup
1.  Clone the repository.
2. run this command inside the cloned repository directory: `npm install`
4. run this command inside the cloned repository: `node node_modules/webdriver-manager update`


### Testing Steps
1. Terminal command with Tags: `tags="@searchTerm" npm run e2e -- --dateReport`
2. Terminal command with Suites: `npm run e2e -- --suite smoke --dateReport` Suites defined in e2e.suites.son, use to order your tests instead of tags.
3. Headless mode: `tags="@searchTerm" npm run e2e -- --headless --dateReport`
