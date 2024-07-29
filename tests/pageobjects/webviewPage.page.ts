import Footer from "./footer.page.js";

class WebViewPage extends Footer {
  el = {
    viewOnGH: "//*[@text='View on GitHub']",
  };
}

export default new WebViewPage();
