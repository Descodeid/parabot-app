import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcStar, Product} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const LisProduct = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.card}
      onPress={() => navigation.navigate('DetailProduct')}>
      <View style={styles.thumbnailContainer}>
        <Image source={Product} style={styles.image} />
      </View>
      <View style={styles.descContainer}>
        <View style={styles.container}>
          <Text style={styles.price}>$100</Text>
          <View style={styles.rating}>
            <IcStar />
            <Text style={styles.textRating}>4.6</Text>
          </View>
        </View>
        <Text style={styles.desc}>Comfort Cream</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LisProduct;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(230, 239, 246, 0.35)',
    width: normalize(150),
    borderRadius: normalize(15),
    marginBottom: normalize(15),
    marginRight: normalize(15),
  },
  thumbnailContainer: {
    backgroundColor: '#D7B887',
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: normalize(124),
    height: normalize(124),
  },
  descContainer: {
    padding: normalize(10),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'NotoSerif-Bold',
    fontSize: normalize(20),
    color: '#333333',
  },
  textRating: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(12),
    color: '#BDBDBD',
  },
  desc: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(14),
    color: '#548999',
  },
});
