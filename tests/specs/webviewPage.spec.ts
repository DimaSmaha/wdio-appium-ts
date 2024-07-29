import webviewPage from "../pageobjects/webviewPage.page.js";

describe("Webview Page", () => {
  it("should verify webview page", async () => {
    await webviewPage.webviewWidget.click();
    await webviewPage.viewOnGH.scrollIntoView();
    await expect(webviewPage.viewOnGH).toBeDisplayed();
  });
});
