import {NavigationContainer} from '@react-navigation/native';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {coinApi} from './src/feature/apiSlice';
import AppNavigator from './src/navigations/AppNavigator';
import {colors} from './src/theme/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.lightDark} />
      <ApiProvider api={coinApi}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApiProvider>
    </SafeAreaProvider>
  );
};

export default App;
