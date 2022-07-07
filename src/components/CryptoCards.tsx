import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useCoinMarketQuery} from '../feature/apiSlice';
// import {coins} from '../data/coins';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import CryptoCard from './CryptoCard';
import Loader from './Loader';
// import Underline from './Underline';

const CryptoCards = () => {
  const {data: coins, error, isLoading} = useCoinMarketQuery('usd');
  console.log('coins', coins);

  const renderItem = ({item}: any) => <CryptoCard {...item} key={item.id} />;

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}
      <FlatList
        contentContainerStyle={{paddingBottom: 180}}
        data={coins}
        bounces={false}
        // decelerationRate="fast"
        maxToRenderPerBatch={30}
        showsVerticalScrollIndicator={false}
        keyExtractor={coin => coin.id}
        renderItem={renderItem}
      />
      {/* TODO: use netinfo to check if user has connection issue and display it */}
      {error && <Text>Data cannot be fetched</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // paddingTop: 10,
    // paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.neutral,
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingBottom: 5,
  },
});
export default CryptoCards;
