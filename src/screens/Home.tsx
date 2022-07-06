import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CryptoCards from '../components/CryptoCards';
import MainHeader from '../components/MainHeader';
import {colors} from '../theme/colors';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <MainHeader />

        <CryptoCards />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
});

export default Home;
