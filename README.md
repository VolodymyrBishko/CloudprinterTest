# Usage

##### Before running the test for the first time, install node.js(only once).
1. Install dependencies:
```bash
npm install 
```

2. Run the tests:
```bash
npx cypress open
```
3. Run the tests: in the terminal 
```bash
npx cypress run
```

## Technologies
Project is created with:
* Cypress version: ^13.5.0
* Page Object pattern

## Directory structure  
* fixtures - contains test data.
* reports - contains the reports.
* screenshots - contains screenshots.
* e2e/api - contains api tests.
* plugins/index.js - import external plugins for Cypress or add code that runs in Node instead of browser.
* support
    - commands.js - allows to create custom commands and overwriting existing commands. 
    - index.js - allows to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files.
* cypress.config.js - the first time you open Cypress Test Runner, it creates the `cypress.comfig.js` configuration file. This JSON file is used to store any configuration values you supply.