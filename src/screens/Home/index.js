import React from 'react';

import { View, Image, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import vw from '../../Units/vw';
import p1 from '../../../assets/images/product1.png';
import p2 from '../../../assets/images/product2.png';
import p3 from '../../../assets/images/product3.png';
import p4 from '../../../assets/images/product4.png';
import p5 from '../../../assets/images/product5.png';
import p6 from '../../../assets/images/product6.png';
import p7 from '../../../assets/images/product7.png';
import p8 from '../../../assets/images/product8.png';
import p9 from '../../../assets/images/product9.png';
import p10 from '../../../assets/images/product10.png';
import p11 from '../../../assets/images/product11.png';
import p12 from '../../../assets/images/product12.png';
import Products from '../../components/products/index';
import { Button } from '../../components';
// import { SearchBar } from '../../components/SearchBar/Index';
const Home = ({ navigation }) => {
  const productShirts = [
    {
      key: '1',
      productImg: p1,
      productTitle: 'Men Fashion',
      bgColor: '#DAF2FD'
    },
    {
      key: '2',
      productImg: p2,
      productTitle: 'Women Fashion',
      bgColor: '#FEE4E0'
    },
    {
      key: '3',
      productImg: p3,
      productTitle: 'Kid Fashion',
      bgColor: '#EFFCFA'
    },
    {
      key: '4',
      productImg: p2,
      productTitle: 'Women Fashion',
      bgColor: '#FEE4E0'
    },
    {
      key: '5',
      productImg: p3,
      productTitle: 'Kid Fashion',
      bgColor: '#EFFCFA'
    },
    {
      key: '6',
      productImg: p1,
      productTitle: 'Men Fashion',
      bgColor: '#DAF2FD'
    },
  ];
  const newArrivals = [
    {
      key: '1',
      productImg: p4,
      productTitle: 'Hats',
      bgColor: ''
    },
    {
      key: '2',
      productImg: p5,
      productTitle: 'Jackets',
      bgColor: ''
    },
    {
      key: '3',
      productImg: p6,
      productTitle: 'Shirts',
      bgColor: ''
    },
    {
      key: '4',
      productImg: p7,
      productTitle: 'Shorts',
      bgColor: ''
    },
    {
      key: '5',
      productImg: p8,
      productTitle: 'Tops',
      bgColor: ''
    },
    {
      key: '6',
      productImg: p9,
      productTitle: 'Pents',
      bgColor: ''
    },
  ];
  const productsData = [
    {
      key: '1',
      productImg: p10,
      productTitle: 'Men Shirt',
      price: '$15.00'
    },
    {
      key: '2',
      productImg: p11,
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
      productImg: p11,
      productTitle: 'Long Sleeve Jacket',
      price: '$15.00'
    },
    {
      key: '5',
      productImg: p12,
      productTitle: 'Tight Pants Legens',
      price: '$15.00'
    },
    {
      key: '6',
      productImg: p10,
      productTitle: 'Men Shirt',
      price: '$15.00'
    },

  ];
  return (
    <View>
      {/* <View style={{ position: 'relative' }}> */}
      <View style={styles.header}>
        <Text style={styles.headerTxt}>HOME</Text>
      </View>
      {/* <SearchBar style={{ position: 'absolute', top: -10, flex: 1 }} /> */}
      {/* </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* categories Component */}
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.card}>
              <ImageBackground style={styles.cardImg} source={require('../../../assets/images/banner1.png')} >
                <View style={styles.cardContent}>
                  <Text style={styles.cardLabel}>News</Text>
                  <Text style={styles.cardText}>Collections 2019/20</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.flexCol} >
              <View style={styles.card}>
                <ImageBackground style={styles.cardImg1} source={require('../../../assets/images/banner2.png')} >
                  <View style={styles.cardContent2}>
                    <Text style={styles.cardLabel}>Shop Now</Text>
                    <Text style={styles.cardText2}>Get up to</Text>
                    <Text style={styles.cardTextSmall}>50% Off</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.card}>
                <ImageBackground style={styles.cardImg1} source={require('../../../assets/images/banner3.png')} >
                  <View style={styles.cardContent}>
                    <Text style={styles.cardLabel}>Shop Now</Text>
                    <Text style={styles.cardText2}>Clothing</Text>
                    <Text style={styles.cardTextSmall}>Latest Kids</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          {/* CATEGORIES */}
          <Text style={styles.heading}>CATEGORIES</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            <View style={[styles.row, { flexWrap: 'wrap' }]} >
              {
                productShirts.map((item, index) => {
                  return (
                    <View style={[styles.col, { marginVertical: 4 }]} key={index} >
                      <View style={[styles.cardWrap, { backgroundColor: item.bgColor ? item.bgColor : "transparent" }]}>
                        <Image source={item.productImg}
                          style={styles.productImg} />
                        <Text style={styles.productTitle} >{item.productTitle}</Text>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>
          {/* New Arrival */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 6 }}>
            <Text style={styles.heading}>New Arrival</Text>
            < TouchableOpacity style={styles.secBtn}>
              <Text style={styles.btnText}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { flexWrap: 'wrap' }]} >
            {
              newArrivals.map((item, index) => {
                return (
                  <View style={[styles.col, { marginVertical: 4 }]} key={index} >
                    <View style={[styles.secCardWrap, { backgroundColor: item.bgColor ? item.bgColor : "transparent" }]}>
                      <Image source={item.productImg}
                        style={styles.productImg} />
                    </View>
                    <Text style={[styles.productTitle, { textAlign: 'center' }]} >{item.productTitle}</Text>
                  </View>
                );
              })
            }
          </View>
          {/* Banner */}
          <ImageBackground style={styles.banners} source={require('../../../assets/images/banner.png')} >
            <View style={styles.bannersContent}>
              <Text style={styles.bannerHeading}>Popular</Text>
              <Text style={styles.bannerHeading}>Collections</Text>
            </View>
          </ImageBackground>
          {/* Products */}
          <View style={[styles.row, { flexWrap: 'wrap', marginVertical: 30, backgroundColor: '#fff' }]} >
            {
              productsData.map((item, index) => {
                return (
                  <View style={[styles.col, { marginVertical: 10 }]} key={index}>
                    <TouchableOpacity
                      style={{ flex: 1 }}
                      // onPress={() => navigation.navigate("ProductScreens", { screen: "ProductScreens" })}
                      onPress={() => navigation.navigate("StepForm", { screen: "StepForm" })}
                    >
                      <Products
                        data={item}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })
            }
          </View>
        </View>
      </ScrollView >
    </View >
  );
};

export default Home; 
