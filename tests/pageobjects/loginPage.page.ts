import Footer from "../pageobjects/footer.page.js";

class LoginPage extends Footer {
  el = {
    btnSignUpContainer: '//*[@content-desc="button-sign-up-container"]',
    inputEmail: "~input-email",
    inputPassword: "~input-password",
    inputRepeatPassword: "~input-repeat-password",
    btnSignUp: '//*[@content-desc="button-SIGN UP"]',
    popupSignupSuccessMessage: '//*[@resource-id="android:id/message"]',
  };

  async signUp(email: string, password: string): Promise<void> {
    // await $(super.loginWidget).click();
    // await $(this.btnSignUpContainer).click();
    // await $(this.inputEmail).setValue(email);
    // await $(this.inputPassword).setValue(password);
    // await $(this.inputRepeatPassword).setValue(password);
    // await $(this.btnSignUp).click();

    await this.clickElement(this.commonEl.loginWidget);
    await this.clickElement(this.el.btnSignUpContainer);
    await this.setElementInputValue(this.el.inputEmail, email);
    await this.setElementInputValue(this.el.inputPassword, password);
    await this.setElementInputValue(this.el.inputRepeatPassword, password);
    await this.clickElement(this.el.btnSignUp);
  }
}

export default new LoginPage();
