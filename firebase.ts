import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

// Configuración por defecto (se sobrescribirá con google-services.json)
const defaultConfig = {
  apiKey: 'AIzaSyAAAAAAAAAAAAAAAAAAAAAA',
  appId: '1:111111111111:android:1111111111111111',
  projectId: 'your-project-id',
  // Añade otros campos necesarios aquí
};

if (!firebase.apps.length) {
  firebase.initializeApp(defaultConfig);
}

export default firebase;