import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CryptoDetails from '../screens/CryptoDetails';
// import Home from '../screens/Home';
import {RootStackParamList} from '../types/types';
import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="TabNavigation" component={TabNavigator} />
      <Screen name="CryptoDetailsScreen" component={CryptoDetails} />
    </Navigator>
  );
};

export default AppNavigator;
