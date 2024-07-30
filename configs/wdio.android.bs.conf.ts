import { config as baseConfig } from "./base.config.conf.js";

export const config = {
  ...baseConfig,
  user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",

  // specs: ["../tests/specs/**/*.spec.ts"],
  specs: ["../tests/specs/loginPage.spec.ts"],

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Google Pixel 7",
      "appium:platformVersion": "13.0",
      "appium:automationName": "UIAutomator2",
      "appium:app": process.env.BROWSERSTACK_APP_ID || "bs://<hashed app-id>",
    },
  ],

  services: [["browserstack"]],
};
