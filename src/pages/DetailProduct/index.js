import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcFavoriteButton, IcStar, Product} from '../../assets';
import {Button, Gap, Header} from '../../components';
import normalize from 'react-native-normalize';

const DetailProduct = () => {
  return (
    <View style={styles.page}>
      <Header title="Detail Product" />
      <View style={styles.container}>
        <Image source={Product} style={styles.image} />
        <View style={styles.favoriteButton}>
          <IcFavoriteButton />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.name}>Comfort Cream Chair</Text>
            <View style={styles.rating}>
              <IcStar />
              <IcStar />
              <IcStar />
              <IcStar />
              <IcStar />
              <Text style={styles.textRating}>5.0</Text>
            </View>
          </View>
          <Text style={styles.price}>$200</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Presenting comfortable chair in use with soft foam and foot chair
            made of strong teak wood, easy to clean and wood capable of durable.
          </Text>
        </View>
        <Gap height={25} />
        <Button />
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    height: '60%',
    backgroundColor: '#D7B887',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: normalize(385),
    height: normalize(385),
  },
  favoriteButton: {
    position: 'absolute',
    top: normalize(18),
    right: normalize(25),
  },
  card: {
    flex: 1,
    borderTopLeftRadius: normalize(15),
    borderTopRightRadius: normalize(15),
    backgroundColor: '#FFFFFF',
    marginTop: normalize(-15),
    padding: normalize(25),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(12),
    color: '#BDBDBD',
    marginTop: normalize(7),
    marginLeft: normalize(5),
  },
  name: {
    fontFamily: 'NotoSerif-Bold',
    fontSize: normalize(20),
    color: '#548999',
  },
  price: {
    fontFamily: 'NotoSerif-Bold',
    fontSize: normalize(30),
    color: '#333333',
  },
  descContainer: {
    marginTop: normalize(21),
  },
  desc: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(14),
    color: '#BDBDBD',
    lineHeight: normalize(24),
  },
});
