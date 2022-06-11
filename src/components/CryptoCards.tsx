import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {coins} from '../data/coins';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import CryptoCard from './CryptoCard';
// import Underline from './Underline';

// {data: coins}: any
const CryptoCards = () => {
  const renderItem = ({item}: any) => <CryptoCard {...item} key={item.id} />;

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.title}>Popular Currencies</Text>
      </View> */}
      {/* CryptoCard */}
      <FlatList
        contentContainerStyle={{paddingBottom: 180}}
        data={coins}
        bounces={false}
        decelerationRate="fast"
        maxToRenderPerBatch={30}
        showsVerticalScrollIndicator={false}
        keyExtractor={coin => coin.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    // paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.neutral,
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingBottom: 5,
  },
});
export default CryptoCards;
