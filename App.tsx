import {NavigationContainer} from '@react-navigation/native';
// import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
// import {coinApi} from './src/feature/coinApi';
import AppNavigator from './src/navigations/AppNavigator';
import {colors} from './src/theme/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.lightDark} />
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
