import Footer from "./footer.page.js";

class WebViewPage extends Footer {
  get viewOnGH(): ChainablePromiseElement {
    return $('//*[@text="View on GitHub"]');
  }
}

export default new WebViewPage();
