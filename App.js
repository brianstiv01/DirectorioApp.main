import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './contexts/ThemeContext';
import SplashScreen from './components/SplashScreen';
import UserTypeSelection from './components/UserTypeSelection';
import MainMenu from './components/MainMenu';
import ServicesMenu from './components/ServicesMenu';
import ServiceList from './components/ServiceList';
import CompanyDetail from './components/CompanyDetail';
import CompanyRegistration from './components/CompanyRegistration';
import ClientRegistration from './components/ClientRegistration';
import '@react-native-firebase/app';

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="UserTypeSelection" component={UserTypeSelection} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="ServicesMenu" component={ServicesMenu} />
          <Stack.Screen name="ServiceList" component={ServiceList} />
          <Stack.Screen name="CompanyDetail" component={CompanyDetail} />
          <Stack.Screen name="CompanyRegistration" component={CompanyRegistration} />
          <Stack.Screen name="ClientRegistration" component={ClientRegistration} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;