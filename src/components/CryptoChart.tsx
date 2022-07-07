import * as React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const CryptoChart = () => {
  const days = ['1d', '1w', '1m', '1y'];

  return (
    <View>
      <Text style={styles.chart}>Charts</Text>

      <View style={styles.days}>
        {days?.map((day, i) => (
          <Pressable key={i}>
            <Text style={styles.day}>{day}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    fontSize: 130,
    color: colors.neutral,
  },
  days: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    // paddingHorizontal: 30,
    paddingVertical: 20,
    // borderRadius: 20,
  },
  day: {
    color: colors.neutral,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 25,
    // NOTE: on focused, show the bg color to grey
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.grey,
    textTransform: 'uppercase',
    fontFamily: fonts.semibold,
  },
});
export default CryptoChart;
