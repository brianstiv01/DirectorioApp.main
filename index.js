import '@react-native-firebase/app';
// Resto de tus importaciones y código...
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);