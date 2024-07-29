import loginPage from "../pageobjects/loginPage.page.js";

//Should pass
describe("Login/Sign Up Form", () => {
  it("should signup with valid credentials", async () => {
    // await loginPage.signUp("testing123@mailnator.com", "SuperSecretPassword!");
    // await expect(loginPage.popupSignupSuccessMessage).toBeExisting();
    // await expect(loginPage.popupSignupSuccessMessage).toHaveTextContaining(
    //   "You successfully signed up!",
    // );

    await loginPage.signUp("testing123@mailnator.com", "SuperSecretPassword!");
    await expect(
      loginPage.isElementExist(loginPage.popupSignupSuccessMessage),
    ).toBeExisting();
    await expect(
      loginPage.getElementText(loginPage.popupSignupSuccessMessage),
    ).toHaveTextContaining("You successfully signed up!");
  });
});
