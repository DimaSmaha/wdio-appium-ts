import loginPage from "../pageobjects/loginPage.page.js";

// Should pass
describe("Login/Sign Up Form", () => {
  it("should signup with valid credentials", async () => {
    // await loginPage.signUp("testing123@mailnator.com", "SuperSecretPassword!");
    // await expect($(loginPage.el.popupSignupSuccessMessage)).toBeExisting();
    // await expect($(loginPage.el.popupSignupSuccessMessage)).toHaveTextContaining(
    //   "You successfully signed up!",
    // );

    await loginPage.signUp("testing123@mailnator.com", "SuperSecretPassword!");
    await loginPage.waitForAlert();
    await loginPage.waitForAlertText("You successfully signed up!");
    await loginPage.clickAcceptAlert();
  });
});
