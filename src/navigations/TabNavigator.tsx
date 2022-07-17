import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from '../types/types';
import Home from '../screens/Home';
import ConvertCyrpto from '../screens/ConvertCyrpto';
import Icon from 'react-native-remix-icon';
import {colors} from '../theme/colors';
import Setting from '../screens/Setting';

const TabNavigator = () => {
  const {Navigator, Screen} = createBottomTabNavigator<TabStackParamList>();

  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-6-fill' : 'home-6-line';
          } else if (route.name === 'ConvertCyrpto') {
            iconName = focused ? 'bit-coin-line' : 'bit-coin-line';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings-6-fill' : 'settings-6-line';
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'heart-2-fill' : 'heart-2-line';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.neutral,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBadgeStyle: {backgroundColor: 'red', color: 'pink'},
        tabBarItemStyle: {
          borderTopColor: 'yellow',
        },
        tabBarStyle: {
          backgroundColor: colors.lightDark,
          borderTopWidth: 0,
        },
        // tabBarBackground: ({}),
        // tabBarLabelPosition: 'beside-icon',
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="ConvertCyrpto" component={ConvertCyrpto} />
      {/* <Screen name="Portfolio" component={Setting} /> */}
      <Screen name="Setting" component={Setting} />
    </Navigator>
  );
};

export default TabNavigator;
