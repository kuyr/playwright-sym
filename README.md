
# Symphony Project

## Overview

This project uses Playwright to run UI and API tests. The tests are organized into two separate directories and configurations, allowing for independent or combined execution of both test types.

## Directory Structure

```
symphony/
├── node_modules/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── index.js
│   ├── pages/
│   │   ├── login.page.js
│   │   ├── products.page.js
│   │   └── ...
│   ├── ui_tests/
│   │   ├── ui.test.js
│   │   └── ...
│   └── utils/
│       ├── api.helper.js
│       └── ...
├── playwright-report/
│   └── index.html
├── test-results/
│   └── .last-run.json   
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.api.js
├── playwright.config.ui.js
└── README.md
```

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/kuyr/playwright-sym.git
cd symphony
npm install
```

## Running Tests

### Running API Tests

To run the API tests, use the following command:

```sh
npm run test:api
```

### Running UI Tests

To run the UI tests, use the following command:

```sh
npm run test:ui
```

### Running Both Tests

To run both API and UI tests sequentially, use the following command:

```sh
npm run test:all
```

This project setup allows you to run API and UI tests independently or together. Follow the instructions to install dependencies and run the tests as needed. 

Happy testing! 🧪
