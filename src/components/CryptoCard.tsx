import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import {CoinCardProps} from '../types/types';
import Dialog from './Dialog';

const CryptoCard = ({
  symbol,
  current_price,
  image,
  price_change_percentage_24h,
  // total_volume,
  name,
}: CoinCardProps) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Pressable
        style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.card]}
        onPress={() => toggleModal()}>
        <View style={styles.cardLeft}>
          <View style={styles.imgContainer}>
            <Image source={{uri: image}} style={styles.logo} />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTexts}>
              <Text style={styles.symbol}>{symbol}</Text>
            </View>
            <Text style={styles.name}>{name}</Text>

            {/* <Text style={styles.volume}>Vol. {total_volume}</Text> */}
          </View>
        </View>

        <View>
          <Text style={styles.currentPrice}>${current_price}</Text>
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
            {/* check if the first string is a minus, if not add plus */}
            {price_change_percentage_24h.toString()[0] === '-'
              ? `${price_change_percentage_24h.toFixed(2)}%`
              : `+ ${price_change_percentage_24h.toFixed(2)}%`}
          </Text>
        </View>
      </Pressable>
      <Dialog isModalVisible={isModalVisible} toggleModal={toggleModal} />
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
    fontSize: 25,
    color: colors.neutral,
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
  },
  name: {
    color: colors.neutral,
    fontSize: 18,
    fontFamily: fonts.regular,
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
    fontFamily: fonts.semibold,
  },
});
export default CryptoCard;
