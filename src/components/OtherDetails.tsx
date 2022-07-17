import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import AboutCrypto from './AboutCrypto';

const OtherDetails = () => {
  return (
    <ScrollView style={styles.otherDetailsContainer}>
      <AboutCrypto />

      <View style={styles.otherDetails}>
        <View style={styles.otherDetail}>
          <Text style={styles.title}>Market Cap</Text>
          <Text style={styles.subtitle}>$2,310,444,898.46</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text style={styles.title}>24 Hour Trading Vol</Text>
          <Text style={styles.subtitle}>$2,310,444,898.46</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text style={styles.title}>All Time High</Text>
          <Text style={styles.subtitle}>$2,310,444,898.46</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text style={styles.title}>Circulating Supply</Text>
          <Text style={styles.subtitle}>$2,310,444,898.46</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text style={styles.title}>Total Supply </Text>
          <Text style={styles.subtitle}>$2,310,444,898.46</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text style={styles.title}>Max Supply</Text>
          <Text style={styles.subtitle}>$2,310,444,898.46</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  otherDetailsContainer: {
    paddingHorizontal: 30,
  },
  otherDetails: {
    marginVertical: 20,
  },
  otherDetail: {
    borderBottomWidth: 0.7,
    borderBottomColor: colors.grey,
    paddingVertical: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.grey,
    fontFamily: fonts.regular,
    fontSize: 15,
  },
  subtitle: {
    color: colors.neutral,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
});
export default OtherDetails;
