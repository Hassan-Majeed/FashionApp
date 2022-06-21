import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../res';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground style={styles.authbg} source={require('../../../assets/images/login-bg.png')} >
      <View style={styles.screen}>
        <View style={styles.container}>
          <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.wrapperSlogan}>
          <Text style={styles.txtSlogan}>Shop Your Daily </Text>
          <Text style={styles.txtSlogan}>Necessary</Text>
        </View>
        <Gap height={90} />
        <Button
          // onPress={() => navigation.replace('Login')}
          onPress={() => navigation.replace('Login')}
          text="Get Started"
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2 * vh,
  },
  logo: {
    width: 35 * vw,
    height: 18 * vh,
  },
  wrapperSlogan: {
    marginTop: 51
  },
  txtSlogan: {
    fontSize: 32,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
  },
  authbg: {
    width: 100 * vw,
    height: 100 * vh,
    paddingHorizontal: 2 * vw,
  },
});
