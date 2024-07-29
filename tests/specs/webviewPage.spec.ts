import webviewPage from "../pageobjects/webviewPage.page.js";

// Should fail
describe("Webview Page", () => {
  it("should verify webview page", async () => {
    // await $(webviewPage.el.webviewWidget).click();
    // await $(webviewPage.el.viewOnGH).scrollIntoView();
    // await expect($(webviewPage.el.viewOnGH)).toBeDisplayed();

    await webviewPage.clickElement(webviewPage.commonEl.webviewWidget);
    await webviewPage.scrollElementIntoView(webviewPage.el.viewOnGH);
    await expect(
      webviewPage.isElementDisplayed(webviewPage.el.viewOnGH),
    ).toBeDisplayed();
  });
});
