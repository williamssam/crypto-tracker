import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Crypto</Text>
          <Text style={styles.subtitle}>Pricer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  title: {
    fontSize: 54,
    fontWeight: '900',
    color: colors.black,
    textTransform: 'uppercase',
    fontFamily: fonts.black,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.grey,
    // textTransform: 'uppercase',
  },
});

export default Home;
