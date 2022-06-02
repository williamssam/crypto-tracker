import * as React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {colors} from './src/theme/colors';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
// import {store} from './src/app/store';
import {coinApi} from './src/feature/apiSlice';

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
