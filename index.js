/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
/**
 * ENABLE: Network request on Chrome dev-tools
 */

XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
