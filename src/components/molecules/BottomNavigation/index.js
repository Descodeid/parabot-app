import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcFavorite, IcHome, IcProduct, IcProfile} from '../../../assets';

const Icon = ({label}) => {
  switch (label) {
    case 'Home':
      return <IcHome />;
    case 'Product':
      return <IcProduct />;
    case 'Favorite':
      return <IcFavorite />;
    case 'Profile':
      return <IcProfile />;

    default:
      <IcHome />;
  }
  return <IcHome />;
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.menu}>
              <Icon label={label} />
              <View style={styles.dot(isFocused)} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    width: normalize(333, 'width'),
    flexDirection: 'row',
    backgroundColor: '#548999',
    position: 'absolute',
    bottom: 25,
    paddingHorizontal: normalize(38),
    paddingVertical: normalize(12),
    justifyContent: 'space-between',
    borderRadius: normalize(15),
    marginHorizontal: normalize(25),
    elevation: 10,
  },
  dot: isFocused => ({
    backgroundColor: '#FFFFFF',
    width: isFocused ? normalize(7) : 0,
    height: isFocused ? normalize(7) : 0,
    borderRadius: normalize(7),
    marginTop: normalize(5),
  }),
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
