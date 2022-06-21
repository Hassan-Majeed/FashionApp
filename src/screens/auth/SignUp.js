import React from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimInput from './PrimInput';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <ImageBackground style={styles.authbg} source={require('../../../assets/images/login-bg.png')} >
          <View style={styles.container}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.formWrapper}>
            <Text style={styles.textCenter}>SIGN UP</Text>
            <PrimInput
              icon={<AntIcon name={'user'} size={15} />}
              placeholder="Username"
              secureTextEntry={false}
            />
            <PrimInput
              icon={<FontIcon name={'email'} size={15} />}
              placeholder="Email Address"
              secureTextEntry={false}
            />
            <PrimInput
              icon={<EntIcon name={'eye-with-line'} size={15} />}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.primBtn} onPress={() => navigation.navigate("Login", { screen: "Login" })}>
              <Text style={styles.btnText}>Sign Up </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.secText}>Already have an account? <Text onPress={() => navigation.navigate("Login", { screen: "Login" })}  >Sign In </Text> </Text>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View >
  )
}
export default SignUp;