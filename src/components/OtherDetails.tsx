import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const OtherDetails = () => {
  return (
    <View style={styles.otherDetailsContainer}>
      <View style={styles.otherDetail}>
        <Text style={styles.title}>Trading Volume</Text>
        <Text style={styles.subtitle}>$2,310,444,898.46</Text>
      </View>
      <View style={styles.otherDetail}>
        <Text style={styles.title}>Trading Volume</Text>
        <Text style={styles.subtitle}>$2,310,444,898.46</Text>
      </View>
      <View style={styles.otherDetail}>
        <Text style={styles.title}>Trading Volume</Text>
        <Text style={styles.subtitle}>$2,310,444,898.46</Text>
      </View>
      <View style={styles.otherDetail}>
        <Text style={styles.title}>Trading Volume</Text>
        <Text style={styles.subtitle}>$2,310,444,898.46</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherDetailsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  otherDetail: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: 15,
  },
  title: {
    color: colors.grey,
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  subtitle: {
    color: colors.neutral,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
});
export default OtherDetails;
