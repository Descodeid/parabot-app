import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowLeft, IcCart} from '../../../assets';
import normalize from 'react-native-normalize';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <IcArrowLeft />
      <Text style={styles.headerText}>{title}</Text>
      <IcCart />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: normalize(50),
    backgroundColor: '#548999',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(25),
  },
  headerText: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(16),
    color: '#E6EFF6',
  },
});
