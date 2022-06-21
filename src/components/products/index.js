import React from 'react';
import vw from '../../Units/vw';
import { View, StyleSheet, Image, Text } from 'react-native';
import styles from './styles';
const Index = (props) => {
  return (
    <View style={[styles.productWrap, { backgroundColor: props.data.bgColor ? props.data.bgColor : "#fff" }]}>
      <Image source={props.data.productImg} style={styles.productImg} />
      <Text style={styles.productTitle} >{props.data.productTitle}</Text>
      <Text style={styles.productTitle} >{props.data.price}</Text>
    </View> 
  );
}

export default Index;
