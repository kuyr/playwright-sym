const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login.page");
const ProductsPage = require("../pages/products.page");

test.describe("UI Tests - Saucedemo", () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("@ui Verify items are sorted by name (A->Z)", async () => {
    let items = await productsPage.getItems();
    let sortedItems = [...items].sort();
    expect(items).toEqual(sortedItems);
  });
  test("@ui change sorting to (Z->A) and verify", async () => {
    await productsPage.sortItems("za");
    let items = await productsPage.getItems();
    let sortedItems = [...items].sort().reverse();
    expect(items).toEqual(sortedItems);
  })
});
