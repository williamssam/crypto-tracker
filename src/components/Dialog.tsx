import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import {DialogProps, RootStackParamList} from '../types/types';

const {width} = Dimensions.get('window');
const IMAGE_WIDTH = 100;
const IMAGE_HEIGHT = 100;
type CryptoDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'CryptoDetailsScreen'
>;

let about =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error, velit minima, id similique vitae possimus in aperiam assumenda illum magni deserunt, exercitationem culpa necessitatibus.';

// TODO: Make dialog fit all the screen
const Dialog = ({isModalVisible, toggleModal}: DialogProps) => {
  const navigation = useNavigation<CryptoDetailsNavigationProps>();

  const closeModalAndNavigate = () => {
    toggleModal();
    navigation.navigate('CryptoDetailsScreen');
  };

  return (
    <View>
      <Modal
        useNativeDriver
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={isModalVisible}
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        onBackButtonPress={() => toggleModal()}
        onBackdropPress={() => toggleModal()}
        style={{margin: 0}}>
        <View style={styles.modal}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/opengraph.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.textContainer}>
            <View>
              <Text style={styles.name}>Bitcoin</Text>
              <Text style={styles.symbol}>BTC</Text>
            </View>

            <Text style={styles.about}>{`${about.slice(0, 150)} ...`}</Text>

            <View style={styles.details}>
              <View style={styles.detail}>
                <Text style={styles.title}>Rank</Text>
                <Text style={styles.subtitle}>TOP #3</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}>Live Price</Text>
                <Text style={styles.subtitle}>$592.22</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}>Market Cap</Text>
                <Text style={styles.subtitle}>$98 B</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => closeModalAndNavigate()}
              style={styles.priceBtn}>
              <Text style={styles.priceText}>Price History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.lightDark,
    position: 'absolute',
    bottom: 0,
    // left: 0,
    width,
    // flex: 1,
    padding: 30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    // borderTopWidth: 2,
    // borderTopColor: colors.grey,
  },
  logoContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: IMAGE_WIDTH / 2,
    position: 'absolute',
    alignSelf: 'center',
    top: -(IMAGE_WIDTH / 2),
  },
  logo: {
    width: IMAGE_WIDTH / 1.5,
    height: IMAGE_WIDTH / 1.5,
  },
  textContainer: {
    marginTop: 50,
  },
  name: {
    color: colors.neutral,
    fontFamily: fonts.bold,
    textAlign: 'center',
    fontSize: 25,
  },
  symbol: {
    color: colors.accent,
    fontFamily: fonts.semibold,
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  about: {
    textAlign: 'center',
    color: colors.neutral,
    fontFamily: fonts.regular,
    paddingTop: 20,
  },
  details: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // detail: {
  //   borderLeftWidth: 1,
  //   borderLeftColor: 'red',
  //   height: 50,
  // },
  title: {
    color: colors.accent,
    textTransform: 'uppercase',
    alignSelf: 'center',
    letterSpacing: 0.5,
    fontFamily: fonts.semibold,
    fontSize: 12,
  },
  subtitle: {
    color: colors.neutral,
    fontFamily: fonts.black,
    fontSize: 25,
    textAlign: 'center',
  },
  priceBtn: {
    backgroundColor: colors.neutral,
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  priceText: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.black,
    textTransform: 'uppercase',
    letterSpacing: 1,
    alignSelf: 'center',
  },
});
export default Dialog;
