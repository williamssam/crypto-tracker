import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CryptoChart from '../components/CryptoChart';
import DetailsHeader from '../components/DetailsHeader';
import Market from '../components/Market';
import OtherDetails from '../components/OtherDetails';
import {useCoinDetailQuery} from '../feature/coinApi';
import {setCoinData} from '../feature/coinSlice';
import {useAppDispatch} from '../hooks/reduxHooks';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const CryptoDetails = () => {
  const {params} = useRoute();
  const {data, error, isLoading} = useCoinDetailQuery(
    params?.coinId.toLowerCase(),
  );
  const dispatch = useAppDispatch();
  // console.log('route', coinId);
  // console.log('loading', isLoading);
  console.log('data', data);
  console.log('error', error);

  React.useEffect(() => {
    if (data) {
      dispatch(setCoinData(data));
    }
  }, [data, dispatch]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {isLoading && <Text>Loading baby.....</Text>}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <DetailsHeader />
          <CryptoChart />
        </View>

        <OtherDetails />
        <Market />
        <Text style={styles.update}>Last Update: 12/05/2022 - 10:00am</Text>
      </ScrollView>
      {error && <Text>error</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    backgroundColor: colors.lightDark,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  update: {
    fontSize: 12,
    color: colors.neutral,
    fontFamily: fonts.regular,
    paddingHorizontal: 20,
  },
});

export default CryptoDetails;
