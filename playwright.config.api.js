const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/api_tests', 
  timeout: 30000,
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com', 
  },
  projects: [
    {
      name: 'api',
      use: {},
    },
  ],
});
