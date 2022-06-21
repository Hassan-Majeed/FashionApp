import React from 'react';
import { View, Image, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Mainproducts from '../../components/products/Mainproducts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import p10 from '../../../assets/images/product10.png';
import p11 from '../../../assets/images/product11.png';
import p12 from '../../../assets/images/product12.png';
import p13 from '../../../assets/images/product13.png';
import p14 from '../../../assets/images/product14.png';
import p15 from '../../../assets/images/product15.png';

const Index = ({ navigation }) => {
  const mainProductData = [
    {
      key: '1',
      productImg: p10,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '2',
      productImg: p13,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '3',
      productImg: p12,
      productTitle: 'Tight Pants Legens',
      price: '$15.00'
    },
    {
      key: '4',
      productImg: p15,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '5',
      productImg: p14,
      productTitle: 'Tight Pants Legens',
      price: '$15.00'
    },
    {
      key: '6',
      productImg: p10,
      productTitle: 'Men Shirt',
      price: '$15.00'
    },
    {
      key: '7',
      productImg: p10,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '8',
      productImg: p13,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '9',
      productImg: p12,
      productTitle: 'Tight Pants Legens',
      price: '$15.00'
    },
    {
      key: '10',
      productImg: p15,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '11',
      productImg: p14,
      productTitle: 'Tight Pants Legens',
      price: '$15.00'
    },
    {
      key: '12',
      productImg: p10,
      productTitle: 'Men Shirt',
      price: '$15.00'
    },

  ];
  return (
    <View style={{ marginBottom: 8 * vh }}>
      {/* Fixed Header */}
      <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackBtn}>
          <Ionicons name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>PRODUCTS</Text>
      </View>
      {/* Product scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          {/* categories Component */}
          <View style={styles.container}>
            <Text style={styles.pageTitle}>3500 ITEMS</Text>
            <View style={[styles.row, { flexWrap: 'wrap', marginBottom: 30 }]} >
              {
                mainProductData.map((item, index) => {
                  return (
                    <View style={[styles.col, { marginVertical: 10 }]} key={index}>
                      <Mainproducts
                        data={item}
                      />
                    </View>
                  );
                })
              }
            </View>
          </View>
        </View>
      </ScrollView >
    </View>
  );
};

export default Index; 
