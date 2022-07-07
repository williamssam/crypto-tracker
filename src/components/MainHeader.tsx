import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import Underline from './Underline';

const MainHeader = () => {
  return (
    // TODO: Make this section a curved section
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Crypto</Text>
        <Text style={styles.subtitle}>Price Tracker</Text>
        <Underline />
      </View>
      <Text style={styles.coolEmoji}>😎📉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.lightDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  title: {
    fontSize: 42,
    color: colors.neutral,
    fontFamily: fonts.black,
    // textTransform: 'uppercase',
  },
  otherTitle: {
    fontFamily: fonts.semibold,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.neutral,
    textTransform: 'uppercase',
    fontFamily: fonts.bold,
    letterSpacing: 1,
    lineHeight: 20,
  },
  coolEmoji: {
    fontSize: 32,
    color: 'white',
  },
});
export default MainHeader;
