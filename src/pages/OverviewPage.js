class OverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator('#finish');
    this.totalPrice = page.locator('.summary_total_label');
  }

  async isLoaded() {
    return await this.finishButton.isVisible();
  }

  async completePurchase() {
    await this.finishButton.click();
  }

  async getTotalPrice() {
    const text = await this.totalPrice.textContent();
    return text.replace('Total: $', '');
  }
}

export default OverviewPage;
