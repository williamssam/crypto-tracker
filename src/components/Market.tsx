import * as React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const Market = () => {
  const markets = [
    {
      name: 'binance',
      base: 'bitcoin',
      target: 'usdt',
      price: '178513.32',
      spread: '0.85%',
    },
    {
      name: 'binance',
      base: 'bitcoin',
      target: 'usdt',
      price: '178513.32',
      spread: '0.85%',
    },
    {
      name: 'binance',
      base: 'bitcoin',
      target: 'usdt',
      price: '178513.32',
      spread: '0.85%',
    },
  ];
  return (
    <View style={styles.otherDetailsContainer}>
      <Text style={styles.headingOne}>Bitcoin Markets</Text>

      {/* <View style={styles.marketHeader}>
        <Text style={styles.exchange}>Exchange</Text>

        <Text style={styles.pair}>Pair</Text>

        <Text style={styles.price}>Price</Text>
        <Text style={styles.spread}>Spread</Text>
        <Text style={styles.date}>Date</Text>
      </View> */}

      <View>
        {markets?.map((market, index) => (
          <View style={styles.marketList} key={index}>
            <Text style={styles.exchange}>Binance</Text>

            <Text style={styles.pair}>BTC/USDT</Text>

            <Text style={styles.price}>$19,939.92</Text>
            <Text style={styles.spread}>0.51%</Text>
            <Text style={styles.date}>12/5/2022</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherDetailsContainer: {
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 25,
  },
  headingOne: {
    color: colors.neutral,
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  marketList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.otherBlack,
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  marketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exchange: {
    color: colors.neutral,
    fontFamily: fonts.bold,
    fontSize: 15,
  },
  pair: {
    flexDirection: 'row',
    color: colors.neutral,
    // fontFamily: fonts.semibold,
    fontSize: 14,
  },
  price: {
    color: colors.neutral,
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
  spread: {
    color: colors.neutral,
    fontSize: 14,
  },
  date: {
    color: colors.neutral,
    fontSize: 14,
  },
});
export default Market;
