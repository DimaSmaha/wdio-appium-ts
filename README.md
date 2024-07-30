# Mobile applications TAF on the base of TS, WDIO, Appium and Browserstack

The framework supports Android and iOS applications

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 18 )
- Typescript 5+ version
- Install Visual Studio Code
- Clone and checkout the github project
- npm install

## Setup with Browserstack

- Add .env file with next variables `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, `BROWSERSTACK_ANDROID_APP_ID` and `BROWSERSTACK_IOS_APP_ID`
- Sign in inside browserstack and upload your mobile apps (.apk and .ipa)
- Update `.env` file
- `npm run test-android-bs`

### How to run the android tests on windows

The default configuration (configs/base.config.conf.ts) which will be the base for any other confings, and will require minimum parameters to create a new config, for eg (configs/wdio.android.bs.conf.ts)

Be sure that you have:

- Install Java latest via https://www.java.com/ru/download/manual.jsp
- Set the environment variable called `JAVA_HOME` to the jre directory (C:\Program Files\Android\Android Studio\jre\)
- Install Node v16+ https://nodejs.org/uk
- installed the latest Android Studio version https://developer.android.com/studio
- Add `ANDROID_HOME` to path in OS system variables
- Install Appium by command: `npm install -g appium`
- Install Appium inspector v2+ https://github.com/appium/appium-inspector/releases
- Install Appium drivers (uiautomator2, xcuitest and etc..; `appium driver install uiautomator2`)
- Allow virtualization in BIOS https://www.youtube.com/watch?v=UgDxU0jZAe4
- plugged in any android device into your computer. Leave it unlocked.
- allowed USB-Debugging on the connected android device
- run `adb devices` to check device name( device id )
- set the platform version, device name and path to apps(apk/ipa) inside android config (configs/wdio.android.bs.conf.ts) to the version on your android device.
- run `appium` in cmd
- now you can interact with your apps through the appium inspector on your PC

### Linter

Project uses eslint and to lint the typescript files. The prettier plugin in eslint tries to autoformat the code on every run. Also there is included husky, for automatic linting during pre-commit

### Test structure

WProject written with the Page Object Pattern described in <https://webdriver.io/docs/pageobjects.html>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
