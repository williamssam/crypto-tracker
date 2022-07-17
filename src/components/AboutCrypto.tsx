import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import RenderHTML from 'react-native-render-html';
import {coinDetails} from '../feature/coinSlice';
import {useAppSelector} from '../hooks/reduxHooks';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import {formatDate} from '../utils/formatDate';

const SIZE = 40;

const AboutCrypto = () => {
  const {coin} = useAppSelector(coinDetails);
  const {width} = useWindowDimensions();
  console.info('width', width);
  const {coingecko_rank, name, symbol, description, market_data, genesis_date} =
    coin;
  const icons = ['global-fill', 'twitter-fill', 'reddit-fill', 'home-fill'];
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Text style={styles.position}>
            <Text style={styles.hash}>#</Text>
            {coingecko_rank}
          </Text>

          <View>
            <Text style={styles.headingOne}>{name}</Text>
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.desc}>
        {/* <RenderHTML contentWidth={width} source={} /> */}
        {description?.en}
      </Text>

      <View style={styles.otherInfo}>
        <View>
          <Text style={styles.title}>Price Change</Text>
          <View style={styles.changesContainer}>
            <Text style={styles.genesisDate}>
              1h: <Text>13 - 05 - 2025</Text>
            </Text>
            <Text style={styles.genesisDate}>
              24h: <Text>{market_data?.price_change_percentage_24h}</Text>
            </Text>
            <Text style={styles.genesisDate}>
              7d: <Text>{market_data?.price_change_percentage_7d}</Text>
            </Text>
            <Text style={styles.genesisDate}>
              14d: <Text>{market_data?.price_change_percentage_14d}</Text>
            </Text>
            <Text style={styles.genesisDate}>
              30d: <Text>{market_data?.price_change_percentage_30d}</Text>
            </Text>
            <Text style={styles.genesisDate}>
              1y: <Text>{market_data?.price_change_percentage_1y}</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.genesisDate}>
          High 24h: <Text>${market_data?.high_24h?.usd.toLocaleString()}</Text>
        </Text>
        <Text style={styles.genesisDate}>
          Low 24h: <Text>${market_data?.low_24h?.usd.toLocaleString()}</Text>
        </Text>
        {market_data?.circulating_supply ? (
          <Text style={styles.genesisDate}>
            Total Supply:{' '}
            <Text>{market_data?.circulating_supply.toLocaleString()}</Text>
          </Text>
        ) : null}
        {market_data?.total_supply ? (
          <Text style={styles.genesisDate}>
            Total Supply:{' '}
            <Text>{market_data?.total_supply.toLocaleString()}</Text>
          </Text>
        ) : null}
        {genesis_date ? (
          <Text style={styles.genesisDate}>
            Genesis Date: <Text>{formatDate(genesis_date)}</Text>
          </Text>
        ) : null}
      </View>

      <View style={styles.socials}>
        {icons.map((icon, index) => (
          <View style={styles.socialContainer} key={index}>
            <Icon name={icon} size="24" color={colors.neutral} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
  },
  title: {
    color: colors.neutral,
    fontSize: 16,
    fontFamily: fonts.bold,
    borderBottomColor: colors.neutral,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  changesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  headingOne: {
    color: colors.neutral,
    fontSize: 25,
    fontFamily: fonts.black,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTwo: {
    color: colors.neutral,
    fontSize: 18,
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  symbol: {
    color: colors.accent,
    fontSize: 18,
    fontFamily: fonts.semibold,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  position: {
    color: colors.grey,
    fontSize: 50,
    fontFamily: fonts.black,
    marginRight: 10,
    // lineHeight: 125,
    // fontStyle: 'italic',
  },
  hash: {
    color: colors.grey,
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  desc: {
    color: colors.neutral,
    fontSize: 14,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 23,
  },
  socialContainer: {
    backgroundColor: colors.grey,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherInfo: {
    marginTop: 15,
  },
  genesisDate: {
    color: colors.neutral,
    fontFamily: fonts.semibold,
    paddingTop: 3,
    width: '50%',
  },
  // social: {
  //   marginTop: 5,
  // },
});
export default AboutCrypto;
