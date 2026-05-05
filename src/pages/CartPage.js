class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async isLoaded() {
    return await this.cartItems.first().isVisible();
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async removeItem(productName) {
    const item = this.cartItems.filter({ hasText: productName });
    await item.locator('button').filter({ hasText: 'Remove' }).click();
  }
}

export default CartPage;
