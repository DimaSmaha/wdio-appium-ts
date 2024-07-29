import { $ } from "@wdio/globals";

class Footer {
  get loginWidget(): ChainablePromiseElement {
    return $('//*[@content-desc="Login"]');
  }

  get webviewWidget(): ChainablePromiseElement {
    return $('//*[@text="Webview"]');
  }

  get swipeWidget(): ChainablePromiseElement {
    return $('//*[@text="Swipe"]');
  }
}

export default Footer;
