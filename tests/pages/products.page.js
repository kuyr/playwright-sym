class ProductsPage {
    constructor(page) {
      this.page = page;
      this.inventoryItems = '.inventory_item_name';
      this.sortDropdown = '.product_sort_container';
    }
  
    async getItems() {
      return await this.page.$$eval(this.inventoryItems, items => items.map(item => item.textContent));
    }
  
    async sortItems(order) {
      await this.page.selectOption(this.sortDropdown, order);
    }
  }
  
  module.exports = ProductsPage;