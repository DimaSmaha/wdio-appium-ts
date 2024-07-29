import Footer from "./footer.page.js";

class LoginPage extends Footer {
  get btnSignUpContainer(): ChainablePromiseElement {
    return $('//*[@content-desc="button-sign-up-container"]');
  }

  get inputEmail(): ChainablePromiseElement {
    return $("~input-email");
  }

  get inputPassword(): ChainablePromiseElement {
    return $("~input-password");
  }

  get inputRepeatPassword(): ChainablePromiseElement {
    return $("~input-repeat-password");
  }

  get btnSignUp(): ChainablePromiseElement {
    return $('//*[@content-desc="button-SIGN UP"]');
  }

  get popupSignupSuccessMessage(): ChainablePromiseElement {
    return $('//*[@resource-id="android:id/message"]');
  }

  async signUp(email: string, password: string): Promise<void> {
    await super.loginWidget.click();
    await this.btnSignUpContainer.click();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputRepeatPassword.setValue(password);
    await this.btnSignUp.click();
  }
}

export default new LoginPage();
