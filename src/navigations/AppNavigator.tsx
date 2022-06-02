import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CryptoDetails from '../screens/CryptoDetails';
import Home from '../screens/Home';
import {RootStackParamList} from '../types/types';

const AppNavigator = () => {
  const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeScreen" component={Home} />
      <Screen name="CryptoDetailsScreen" component={CryptoDetails} />
    </Navigator>
  );
};

export default AppNavigator;
