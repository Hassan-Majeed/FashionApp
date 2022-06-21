import React from 'react';
import { Text } from 'react-native';
import {
  View, TextInput
} from 'react-native';
import styles from './styles';

const PrimInput = (props) => {
  return (
    <View style={styles.inpWrap} >
      <View>{props.icon ? <Text style={styles.inpIcon}> {props.icon} </Text> : <Text></Text>}</View>
      <TextInput
        style={styles.primInp}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.type}
      />
    </View >
  )
}
export default PrimInput