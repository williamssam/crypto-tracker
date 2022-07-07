import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import logo from '../assets/images/opengraph.png';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const SIZE = 40;

const DetailsHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.coinHeader}>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left-fill" size={24} color={colors.neutral} />
      </Pressable>

      <View>
        <View style={styles.coin}>
          <Text style={styles.symbol}>BTC</Text>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.currentPrice}>$45,338.11</Text>
        <Text style={styles.percent}>+2.5% (24h)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  coin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    // NOTE: this color depends on if the percentage is positive (green) or negative (red)
    color: colors.lightDark,
  },
  backBtn: {
    alignSelf: 'flex-start',
    width: SIZE,
    height: SIZE,
    backgroundColor: colors.grey,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
    top: 15,
  },
});
export default DetailsHeader;
