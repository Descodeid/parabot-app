import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ADD TO CART</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#548999',
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(13),
  },
  text: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(14),
    color: '#FFFFFF',
  },
});
