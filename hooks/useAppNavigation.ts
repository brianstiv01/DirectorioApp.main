import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  MainMenu: undefined;
  ServicesMenu: undefined;
  ServiceList: { category: string };
  CompanyDetail: { companyId: string };
};

type AppNavigationProp = StackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<AppNavigationProp>();