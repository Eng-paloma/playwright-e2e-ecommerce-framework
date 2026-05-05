import LoginPage from '../pages/LoginPage.js';
import ProductsPage from '../pages/ProductsPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import OverviewPage from '../pages/OverviewPage.js';

class CompletePurchaseFlow {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.overviewPage = new OverviewPage(page);
  }

  async execute(user, productName, checkoutInfo) {
    await this.loginPage.navigate();
    await this.loginPage.login(user.username, user.password);
    await this.productsPage.isLoaded();
    await this.productsPage.addProductToCart(productName);
    await this.productsPage.goToCart();
    await this.cartPage.isLoaded();
    await this.cartPage.proceedToCheckout();
    await this.checkoutPage.isLoaded();
    await this.checkoutPage.fillCheckoutInfo(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);
    await this.overviewPage.isLoaded();
    await this.overviewPage.completePurchase();
  }
}

export default CompletePurchaseFlow;
