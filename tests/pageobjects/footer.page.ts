import Page from "../pageobjects/helper.js";

class Footer extends Page {
  // get loginWidget(): ChainablePromiseElement {
  //   return $('//*[@content-desc="Login"]');
  // }
  // async btnSignUpContainer(): Promise<WebdriverIO.Element> {
  //   return this.getElement('//*[@content-desc="button-sign-up-container"]');
  // }

  commonEl = {
    loginWidget: '//*[@text="Login"]',
    webviewWidget: '//*[@text="Webview"]',
    swipeWidget: '//*[@text="Swipe"]',
  };
}

export default Footer;
