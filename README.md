# Boiler-Plate-RN-App

## Includes:

- GlobalStateManagementHook {Custom Hook}
- Theme
- Navigation

## Init with react-native-cli

## Dependencies:

- @react-native-community/async-storage
- axios
- react
- react-native
- react-native-gesture-handle
- react-native-reanimate
- react-native-screens
- react-native-svg
- react-navigation
- react-navigation-stack
- react-navigation-tabs

## Possible fixes for common issues

- For _Fresh setup_

  > git clone '...'-> yarn run --> cd ios && pod install --> cd ios rm -rf build (if build exists) --> root: yarn run ios | android

- For running on windows + android simulator

  > add /android/local.properties, with  
  >  sdk.dir=C:\\Users\\Piktorlabs\\AppData\\Local\\Android\\Sdk
