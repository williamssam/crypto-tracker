import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const DetailsHeader = () => {
  return (
    <View style={styles.coinHeader}>
      <View>
        <Text style={styles.symbol}>BTC</Text>
        <Text style={styles.currentPrice}>$45,338.11</Text>
        <Text style={styles.percent}>+2.5% (24h)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  coinHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  symbol: {
    color: colors.neutral,
    fontFamily: fonts.bold,
    fontSize: 25,
    textAlign: 'center',
  },
  currentPrice: {
    fontSize: 45,
    color: colors.neutral,
    fontFamily: fonts.black,
    lineHeight: 55,
  },
  percent: {
    backgroundColor: colors.neutral,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 30,
    fontFamily: fonts.bold,
  },
});
export default DetailsHeader;
