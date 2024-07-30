import Footer from "../pageobjects/footer.page.js";

class WebViewPage extends Footer {
  el = {
    viewOnGH: "//*[@text='View on GitHub']",
  };
}

export default new WebViewPage();
