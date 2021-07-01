import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcCart} from '../../assets';
import Slider from '../../assets/JSON/Slider';
import {Input, ListProduct} from '../../components';

const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const {width} = useWindowDimensions();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slidersRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Parabot</Text>
        <IcCart />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Input />
        </View>
        <View style={styles.slider}>
          <FlatList
            data={Slider}
            renderItem={({item}) => (
              <ImageBackground source={item.image} style={styles.image}>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.viewNow}>VIEW NOW</Text>
              </ImageBackground>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            snapToInterval={width}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidersRef}
          />
          <View style={styles.container}>
            {Slider.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [7, 18, 7],
                extrapolate: 'clamp',
              });
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.5, 1, 0.3],
              });
              return (
                <Animated.View
                  style={[styles.dot, {width: dotWidth, opacity}]}
                  key={i.toString()}
                />
              );
            })}
          </View>
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

export default Home;

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
    padding: normalize(25),
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
