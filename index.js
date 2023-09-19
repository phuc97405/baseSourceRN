/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setDefaultPropsNativeComponent} from '~system/default-styles';
setDefaultPropsNativeComponent();

AppRegistry.registerComponent(appName, () => App);
