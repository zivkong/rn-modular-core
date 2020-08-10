# React Native Modular Core Setup

## React Native CLI Setup
Recommended to use React Native 0.60 and above

`npx react-native init <projectName>`

<br />
<br />
<br />
<br />

## Modular Core Setup
---

#### Step 1
Install core dependencies

```
yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack react-redux redux redux-devtools-extension redux-persist redux-saga redux-thunk react-native-config https://github.com/zivkong/redux-persist-filesystem-storage.git rn-fetch-blob
```

#### Step 2
Download this repo and copy `core` folder to project root

#### Step 3
Modify root `index.js`

```
import App from './core/App'
import {name as appName} from './app.json'; <- Remove this line

AppRegistry.registerComponent('projectName', () => App)
```

#### Step 4
Delete default root `App.js` and `app.json`

#### Step 5
run `yarn android`

<br />
<br />
<br />
<br />

## Example
---
1. Clone this repository
2. `cd example`
3. `yarn install`
4. `yarn android`

