import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigations/AppNavigator';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;
