import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const SIZE = 40;

const AboutCrypto = () => {
  const icons = ['global-fill', 'twitter-fill', 'home-fill', 'home-fill'];
  return (
    <View>
      {/* more details */}
      {/* add ranking as a watermark in the header */}
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Text style={styles.position}>
            <Text style={styles.hash}>#</Text>1
          </Text>

          <View>
            <Text style={styles.headingOne}>Bitcoin</Text>
            <Text style={styles.symbol}>BTC</Text>
          </View>
        </View>
      </View>

      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        omnis quidem aliquam quibusdam dolorem explicabo aliquid sapiente
        voluptatem ab, blanditiis sed sint temporibus perferendis nesciunt
        quisquam quis accusantium, ex maiores beatae laboriosam! Error, illo
        sapiente libero exercitationem omnis provident vero quas deserunt
        dignissimos eligendi fugiat totam iure, sequi aperiam eum. love
      </Text>

      <View style={styles.otherInfo}>
        <Text style={styles.genesisDate}>
          Genesis Date: <Text>13 - 05 - 2025</Text>
        </Text>
      </View>

      <View style={styles.socials}>
        {icons.map((icon, index) => (
          <View style={styles.socialContainer} key={index}>
            <Icon name={icon} size="24" color={colors.neutral} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
  },
  headingOne: {
    color: colors.neutral,
    fontSize: 25,
    fontFamily: fonts.black,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTwo: {
    color: colors.neutral,
    fontSize: 18,
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  symbol: {
    color: colors.accent,
    fontSize: 18,
    fontFamily: fonts.semibold,
    lineHeight: 20,
  },
  position: {
    color: colors.grey,
    fontSize: 50,
    fontFamily: fonts.black,
    marginRight: 10,
    // lineHeight: 125,
    // fontStyle: 'italic',
  },
  hash: {
    color: colors.grey,
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  desc: {
    color: colors.neutral,
    // fontSize: 50,
    fontFamily: fonts.regular,
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 23,
  },
  socialContainer: {
    backgroundColor: colors.grey,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherInfo: {
    marginTop: 15,
  },
  genesisDate: {
    color: colors.neutral,
    fontFamily: fonts.bold,
  },
  // social: {
  //   marginTop: 5,
  // },
});
export default AboutCrypto;
