<p align="center">
  <img width="10%" src="https://raw.githubusercontent.com/nexxtway/react-native-rainbow/master/docs/assets/images/rainbow-logo.svg?sanitize=true" alt="React Native Rainbow logo">
</p>

<h1 align="center">
    React Native Rainbow
</h1>

<p align="center">
React Native Rainbow is a collection of components that will reliably help you build your IOS and ANDROID application in a snap. Give it a hack and let us know what you think.
</p>

<div align="center">
 
[![CircleCI](https://circleci.com/gh/nexxtway/react-native-rainbow/tree/master.svg?style=svg)](https://circleci.com/gh/nexxtway/react-native-rainbow/tree/master)
[![npm version](https://badge.fury.io/js/react-native-rainbow.svg)](https://badge.fury.io/js/react-native-rainbow)
<a href="https://cla-assistant.io/nexxtway/react-native-rainbow"><img src="https://cla-assistant.io/readme/badge/nexxtway/react-native-rainbow" alt="CLA assistant" /></a>

</div>

### ✨ Features

-   Components built on top of react-native.
-   Accessibility is part of our definition of done.

<br/>

## ⌨️ Running in iOS simulator

1. git clone https://github.com/nexxtway/react-native-rainbow.git
2. cd react-native-rainbow
3. yarn install
4. yarn loadStories
5. cd ios && pod install
6. open ios project in Xcode (open ReactNativeRainbow.xcworkspace file)
7. build and run

## Linting on VS Code

In order to right linting in vs code you need to follow this steps:

1. Press fn + f1 in keyboard
2. Type `open settings` in search bar and select `Preference: Open Settings (JSON)` option
3. add the following config to the json settings:

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language" : "typescript",
        "autoFix": true
    },
    {
        "language" : "typescriptreact",
        "autoFix": true
    }
]
```
