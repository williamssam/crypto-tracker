import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
} from 'react-native';
// import {cos} from 'react-native-reanimated';
import {useCoinMarketQuery} from '../feature/coinApi';
// import {coins} from '../data/coins';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import CryptoCard from './CryptoCard';
// import Loader from './Loader';
import MainHeader from './MainHeader';
// import MainHeader from './MainHeader';
// import Underline from './Underline';

const CryptoCards = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const {data: coins, error, refetch} = useCoinMarketQuery('usd');
  // console.log('error', error);
  // console.log('coins', coins);
  // console.log(coins);

  const renderItem = ({item}: any) => <CryptoCard {...item} key={item.id} />;

  return (
    <>
      {/* {isLoading && <Loader />} */}
      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        contentContainerStyle={{paddingBottom: 180}}
        data={coins}
        bounces={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refetch} />
        }
        ListHeaderComponent={<MainHeader />}
        maxToRenderPerBatch={30}
        showsVerticalScrollIndicator={false}
        keyExtractor={coin => coin.id}
        renderItem={renderItem}
        stickyHeaderHiddenOnScroll={true}
      />
      {/* TODO: use netinfo to check if user has connection issue and display it */}
      {error && <Text>Data cannot be fetched</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
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
