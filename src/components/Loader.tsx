import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine,
} from 'rn-placeholder';
import {colors} from '../theme/colors';

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <Placeholder
        Left={PlaceholderMedia}
        Animation={Shine}
        style={styles.placeholder}>
        {/* <PlaceholderLine /> */}
        <PlaceholderLine />
        <PlaceholderLine width={60} />
      </Placeholder>

      <Placeholder
        Left={PlaceholderMedia}
        Animation={Shine}
        style={styles.placeholder}>
        {/* <PlaceholderLine /> */}
        <PlaceholderLine />
        <PlaceholderLine width={60} />
      </Placeholder>

      <Placeholder
        Left={PlaceholderMedia}
        Animation={Shine}
        style={styles.placeholder}>
        {/* <PlaceholderLine /> */}
        <PlaceholderLine />
        <PlaceholderLine width={60} />
      </Placeholder>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  placeholder: {
    backgroundColor: colors.lightDark,
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
export default Loader;
