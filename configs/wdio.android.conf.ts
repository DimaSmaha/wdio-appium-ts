import { config as baseConfig } from "./base.config.conf.js";

exports.config = {
  ...baseConfig,
  port: 4723,

  specs: ["../tests/specs/**/*.spec.ts"],
  // specs: ["../tests/specs/testName.spec.ts"],

  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator
      platformName: "Android",
      "appium:platformVersion": "13.0",
      "appium:deviceName": "Pixel_3a",
      "appium:udid": "emulator-5554",
      "appium:autoGrantPermissions": true,
      "appium:app": "apk/Android-NativeDemoApp-0.4.0.apk",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.wdiodemoapp",
      "appium:appActivity": "com.wdiodemoapp.MainActivity",
    },
  ],

  services: [
    [
      "appium",
      {
        command: "appium",
        logPath: "./logs/",
      },
    ],
  ],
};
