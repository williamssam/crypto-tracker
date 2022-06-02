import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CryptoChart from '../components/CryptoChart';
import DetailsHeader from '../components/DetailsHeader';
import OtherDetails from '../components/OtherDetails';
import {colors} from '../theme/colors';

const CryptoDetails = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <DetailsHeader />

          <CryptoChart />
        </View>

        <OtherDetails />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    backgroundColor: colors.lightDark,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});

export default CryptoDetails;
