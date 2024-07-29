import webviewPage from "../pageobjects/webviewPage.page.js";

//Should fail
describe("Webview Page", () => {
  it("should verify webview page", async () => {
    // await $(webviewPage.webviewWidget).click();
    // await $(webviewPage.viewOnGH).scrollIntoView();
    // await expect($(webviewPage.viewOnGH)).toBeDisplayed();

    await webviewPage.clickElement(webviewPage.webviewWidget);
    await webviewPage.scrollElementIntoView(webviewPage.viewOnGH);
    await expect(
      webviewPage.isElementDisplayed(webviewPage.viewOnGH),
    ).toBeDisplayed();
  });
});
