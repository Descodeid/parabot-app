import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Header, Input, ListProduct} from '../../components';

const windowWidth = Dimensions.get('window').width;

const Product = () => {
  return (
    <View style={styles.page}>
      <Header title="Product" />
      <ScrollView>
        <View style={styles.section}>
          <Input />
        </View>
        <View>
          <ScrollView
            style={styles.sectionTabs}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={styles.buttonActive}>
              <Text style={styles.textActive}>All</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.text}>Chairs</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.text}>Tables</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.text}>Boards</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.list}>
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    height: normalize(50),
    backgroundColor: '#548999',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(25),
  },
  headerText: {
    fontFamily: 'NotoSerif-Bold',
    fontSize: normalize(24),
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: normalize(25),
    paddingTop: normalize(25),
  },
  image: {
    width: windowWidth,
    height: normalize(200),
    alignItems: 'center',
    paddingVertical: normalize(15),
  },
  desc: {
    width: normalize(250),
    textAlign: 'center',
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(20),
    color: '#E6EFF6',
  },
  viewNow: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(12),
    color: '#E6EFF6',
    marginTop: normalize(16),
    textDecorationLine: 'underline',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: normalize(10),
    left: normalize(windowWidth / 2.5),
  },
  dot: {
    height: normalize(7),
    borderRadius: normalize(10),
    backgroundColor: '#548999',
    marginHorizontal: normalize(8),
  },
  sectionTabs: {
    padding: normalize(25),
  },
  buttonActive: {
    backgroundColor: '#548999',
    width: normalize(94),
    height: normalize(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(15),
    marginRight: normalize(15),
  },
  button: {
    backgroundColor: '#E6EFF6',
    width: normalize(94),
    height: normalize(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(15),
    marginRight: normalize(15),
  },
  textActive: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(14),
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'NotoSerif-Regular',
    fontSize: normalize(14),
    color: '#89B4C4',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: normalize(25),
  },
});
