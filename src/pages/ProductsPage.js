class ProductsPage {
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async isLoaded() {
    return await this.inventoryContainer.isVisible();
  }

  async addProductToCart(productName) {
    const productLocator = this.page.locator('.inventory_item').filter({ hasText: productName });
    const addButton = productLocator.locator('button').filter({ hasText: 'Add to cart' });
    await addButton.click();
  }

  async getCartItemCount() {
    const text = await this.cartBadge.textContent();
    return parseInt(text) || 0;
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}

export default ProductsPage;
