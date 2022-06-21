import React, { useState, useEffect } from 'react';
import vw from '../../Units/vw';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Button } from '../atoms';
const Mainproducts = (props) => {
  const [iconState, setIconState] = useState(false);
  const changeIcon = () => {
    setIconState(!iconState)
  }
  return (
    <View style={[styles.mainproductWrap, { backgroundColor: props.data.bgColor ? props.data.bgColor : "#fff" }]}>
      <TouchableOpacity style={styles.addtoFav} onPress={changeIcon}>
        {iconState ? <AntIcon name='heart' style={styles.favIconFill} /> : <AntIcon name='hearto' style={styles.favIcon} />}
      </TouchableOpacity>
      <Image source={props.data.productImg} style={styles.productImg} />
      <Text style={styles.productTitle} >{props.data.productTitle}</Text>
      <Text style={styles.price} >{props.data.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainproductWrap: {
    position: 'relative',
    borderColor: 'red',
    width: 45 * vw,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    minHeight: 38 * vh,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15
  },
  productImg: {
    width: 55 * vw,
    height: 15 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 2 * vh
  },
  productTitle: {
    fontSize: 4 * vw,
    fontWeight: 'bold',
    marginBottom: 1 * vh,
    color: '#515C6F',
    textAlign: 'center'
  },
  price: {
    fontSize: 4 * vw,
    color: '#FABC10',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  addtoFav: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
  favIcon: {
    fontSize: 7 * vw,
    color: '#E3E3E3'
  },
  favIconFill: {
    color: '#FABC10',
    fontSize: 7 * vw, 
  }
})

export default Mainproducts;