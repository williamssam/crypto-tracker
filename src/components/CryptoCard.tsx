import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import {CoinCardProps, CryptoDetailsNavigationProps} from '../types/types';
// import Dialog from './Dialog';

const CryptoCard = ({
  symbol,
  current_price,
  image,
  price_change_percentage_24h,
  // total_volume,
  id,
  name,
}: CoinCardProps) => {
  const navigation = useNavigation<CryptoDetailsNavigationProps>();

  return (
    <>
      <Pressable
        style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.card]}
        onPress={() =>
          navigation.navigate('CryptoDetailsScreen', {coinId: id})
        }>
        <View style={styles.cardLeft}>
          <View style={styles.imgContainer}>
            <Image source={{uri: image}} style={styles.logo} />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTexts}>
              <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.symbol}>{symbol}</Text>

            {/* <Text style={styles.volume}>Vol. {total_volume}</Text> */}
          </View>
        </View>

        <View>
          <Text style={styles.currentPrice}>
            {/* {current_price.toLocaleString('en', {
              style: 'currency',
              currency: 'USD',
            })} */}
            {new Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'USD',
            }).format(current_price)}
          </Text>
          <Text
            style={[
              styles.percent,
              {
                color:
                  price_change_percentage_24h.toString()[0] === '-'
                    ? colors.red
                    : colors.green,
              },
            ]}>
            {/* {price_change_percentage_24h.toString()[0] === '-'
              ? `${price_change_percentage_24h.toFixed(2)}%`
              : `+${price_change_percentage_24h.toFixed(2)}%`} */}
            {`${new Intl.NumberFormat('en', {
              signDisplay: 'always',
              // style: 'decimal',
              maximumFractionDigits: 2,
            }).format(price_change_percentage_24h)}%`}
          </Text>
        </View>
      </Pressable>
      {/* <Dialog
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightDark,
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50 / 2,
  },
  logo: {
    width: 40,
    height: 40,
  },
  cardTextContainer: {marginLeft: 12},
  cardTexts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    color: colors.grey,
    fontSize: 17,
    fontFamily: fonts.semibold,
    textTransform: 'uppercase',
  },
  name: {
    color: colors.neutral,
    fontSize: 22,
    fontFamily: fonts.bold,
    textTransform: 'capitalize',
  },
  volume: {
    fontFamily: fonts.semibold,
    color: colors.neutral,
    fontSize: 14,
  },
  currentPrice: {
    textAlign: 'right',
    fontFamily: fonts.black,
    color: colors.neutral,
    fontSize: 25,
  },
  // percentContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  percent: {
    textAlign: 'right',
    // NOTE: this color is based on whether the percentage has increased (green) or decrease (red)
    color: colors.neutral,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
});
export default CryptoCard;
