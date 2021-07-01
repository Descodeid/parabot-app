import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcSearch} from '../../../assets';

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="SEARCH HERE..."
        placeholderTextColor="#89B4C4"
        style={styles.input}
      />
      <IcSearch />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E6EFF6',
    borderRadius: normalize(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(13),
  },
  input: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(14),
    color: '#89B4C4',
    width: '80%',
  },
});
