import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EntIcon from 'react-native-vector-icons/Entypo';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  colors,
  IC_Favorite,
  IC_Favorite_color,
  IC_Home,
  IC_Home_color,
  IC_Notification,
  IC_Notification_color,
  IC_Profile,
  IC_Profile_color,
} from '../../../res';

const Icon = ({ label, isFocused }) => {
  switch (label) {
    case 'Home':
      return isFocused ? <EntIcon name={'home'} size={22} style={{ color: '#8E5609' }} /> : <EntIcon name={'home'} size={22} />;
    case 'Favorite':
      return isFocused ? <MatIcons name={'favorite'} size={22} style={{ color: '#8E5609' }} /> : <MatIcons name={'favorite-border'} size={22} />;
    case 'Notification':
      return isFocused ? <Ionic name={'notifications'} size={22} style={{ color: '#8E5609' }} /> : <Ionic name={'notifications-outline'} size={22} />;
    case 'Profile':
      return isFocused ? <FontAwesome name={'user'} size={22} style={{ color: '#8E5609' }} /> : <Feather name={'user'} size={22} />;
    default:
      return <IC_Home_color />;
  }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
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
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon label={label} isFocused={isFocused} />
              <Text style={{ color: isFocused ? '#A8590B' : '#222' }}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
