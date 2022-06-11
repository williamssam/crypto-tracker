import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CryptoCards from '../components/CryptoCards';
import MainHeader from '../components/MainHeader';
// import {useCoinMarketQuery} from '../feature/apiSlice';
import {colors} from '../theme/colors';

const Home = () => {
  // const {data, error, isLoading} = useCoinMarketQuery('usd');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <MainHeader />

        {/* {isLoading ? <Loader /> : <CryptoCards data={data} />} */}
        <CryptoCards />
        {/* TODO: use netinfo to check if user has connection issue and display it */}
        {/* {error && <Text>Data cannot be fetched</Text>} */}
        {/* */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
});

export default Home;
