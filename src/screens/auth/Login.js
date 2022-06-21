import React from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimInput from './PrimInput';
import Home from '../Home/index'
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import SignUp from './SignUp';
const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <ImageBackground style={styles.authbg} source={require('../../../assets/images/login-bg.png')} >
          <View style={styles.container}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.formWrapper}>
            <Text style={styles.textCenter}>SIGN IN</Text>
            <PrimInput
              icon={<AntIcon name={'user'} size={15} />}
              placeholder="Username"
              secureTextEntry={false}
            />
            <PrimInput
              icon={<EntIcon name={'eye-with-line'} size={15} />}
              placeholder="Password"
              secureTextEntry={true}
            />
            <Text style={styles.textRight}>Forget Password</Text>
            <TouchableOpacity style={styles.primBtn} onPress={() => navigation.navigate("MainApp", { screen: "MainApp" })}>
              <Text style={styles.btnText}>Sign In </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.secText}>Don't have an account? <Text onPress={() => navigation.navigate(SignUp)} >Sign Up</Text> </Text>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Login; 