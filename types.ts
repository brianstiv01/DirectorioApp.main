import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  SplashScreen: undefined;
  UserTypeSelection: undefined;
  MainMenu: { userType: 'CLIENTE' | 'EMPRESA' };
  ServicesMenu: undefined;
  ServiceList: { category: string };
  CompanyDetail: { companyId: string };
  CompanyRegistration: undefined;
  ClientRegistration: undefined;
};

export type UserTypeSelectionNavigationProp = StackNavigationProp<RootStackParamList, 'UserTypeSelection'>;
export type MainMenuNavigationProp = StackNavigationProp<RootStackParamList, 'MainMenu'>;
export type ServicesMenuNavigationProp = StackNavigationProp<RootStackParamList, 'ServicesMenu'>;
export type ServiceListNavigationProp = StackNavigationProp<RootStackParamList, 'ServiceList'>;
export type CompanyDetailNavigationProp = StackNavigationProp<RootStackParamList, 'CompanyDetail'>;
export type CompanyRegistrationNavigationProp = StackNavigationProp<RootStackParamList, 'CompanyRegistration'>;
export type ClientRegistrationNavigationProp = StackNavigationProp<RootStackParamList, 'ClientRegistration'>;

export type MainMenuRouteProp = RouteProp<RootStackParamList, 'MainMenu'>;
export type ServiceListRouteProp = RouteProp<RootStackParamList, 'ServiceList'>;
export type CompanyDetailRouteProp = RouteProp<RootStackParamList, 'CompanyDetail'>;