import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

const Underline = () => {
  return <View style={styles.bottomBar} />;
};

const styles = StyleSheet.create({
  bottomBar: {
    width: 40,
    height: 3,
    backgroundColor: colors.grey,
    marginTop: 5,
  },
});

export default Underline;
