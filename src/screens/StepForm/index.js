import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import PrimInput from "../auth/PrimInput";
import vw from "../../Units/vw";
class index extends Component {
  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: "#A8590B",
      activeStepNumColor: "#fff",
      activeStepIconColor: "#A8590B",
      completedStepIconColor: "#A8590B",
      completedProgressBarColor: "#A8590B",
      disabledStepNumColor: "transparent",
      completedCheckColor: "#fff",
      labelColor: '#707070',
      activeLabelColor: '#A8590B',
    };

    const nextbuttonTextStyle = {
      backgroundColor: "#A8590B",
      paddingHorizontal: 15 * vw,
      paddingVertical: 2 * vh,
      borderRadius: 12,
      color: "white",
      textAlign: 'center',
      justifyContent: 'center',
      width: 70 * vw,
      textAlign: 'center'
    };
    return (
      <View style={styles.bgWhite}>
        {/* Fixed Header */}
        <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackBtn}>
            <Ionicons name="arrow-back" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>CHECKOUT</Text>
        </View>
        {/* Product scrollable content */}
        <KeyboardAwareScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <ProgressSteps {...progressStepsStyle}>
              {/* step page 01 */}
              <ProgressStep
                nextBtnTextStyle={nextbuttonTextStyle}
                nextBtnText="NEXT"
                label="Shipping"
              >
                <View>
                  <View style={styles.formWrapper}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <AntDesign name="checkcircle" style={{ color: '#00C569', fontSize: 8 * vw, marginRight: 3 * vw }} />
                      <Text style={{ color: '#515C6F', fontWeight: 'bold', fontSize: 3 * vw, textAlign: 'center' }}>
                        Billing address is the same as delivery address</Text>
                    </View>
                    <Text style={styles.mainText}>Check Out-1</Text>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>Street 1</Text>
                      <PrimInput
                        placeholder="21, Alex Davidson Avenue"
                        secureTextEntry={false}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>Street 2</Text>
                      <PrimInput
                        placeholder="21, Alex Davidson Avenue"
                        secureTextEntry={false}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>City</Text>
                      <PrimInput
                        placeholder="Victoria Island"
                        secureTextEntry={false}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>State</Text>
                      <PrimInput
                        placeholder="Lagos State"
                        secureTextEntry={false}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>USA</Text>
                      <PrimInput
                        placeholder="USA"
                        secureTextEntry={false}
                      />
                    </View>
                  </View>
                </View>
              </ProgressStep>
              {/* step page 02 */}
              <ProgressStep
                nextBtnTextStyle={nextbuttonTextStyle}
                nextBtnText="NEXT"
                label="Payments"
              >
                <View style={styles.formWrapper}>
                  <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5 * vh }}>

                      <TouchableOpacity>
                        <View style={styles.paymentCards}>
                          <FontAwesome style={{ color: '#fff', fontSize: 5 * vw }} name="credit-card" />
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 4 * vw, fontWeight: 'bold', color: '#666666' }}>Credit Card</Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <View style={styles.paymentCards}>
                          <FontAwesome style={{ color: '#fff', fontSize: 5 * vw }} name="cc-mastercard" />
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 4 * vw, fontWeight: 'bold', color: '#666666' }}>Cash on Delivery</Text>
                      </TouchableOpacity>

                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>Card Number</Text>
                      <PrimInput
                        placeholder="5671 2879 4579 6520"
                        secureTextEntry={false}
                        type={'numeric'}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>Card Holder</Text>
                      <PrimInput
                        placeholder="David Spade"
                        secureTextEntry={false}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>Expire Date</Text>
                      <PrimInput
                        placeholder="8/2022"
                        secureTextEntry={false}
                        type={'numeric'}
                      />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ marginBottom: -20, color: '#515C6F', fontWeight: 'bold' }}>CVV</Text>
                      <PrimInput
                        placeholder="354"
                        secureTextEntry={false}
                        type={'numeric'}
                      />
                    </View>
                  </View>
                </View>
              </ProgressStep>
              {/* step page 03 */}
              <ProgressStep
                nextBtnTextStyle={nextbuttonTextStyle}
                nextBtnText="NEXT"
                label="Confirm"
              >
                <Text style={{ fontSize: 8 * vw, color: '#000', paddingLeft: 4 * vw, marginVertical: 5 * vh,fontWeight:'bold' }}>Summary</Text>
                <View style={{ alignItems: "center", paddingBottom: 10 * vh, }}>
                  {/* total selected Items */}
                  <View style={[styles.selectedCards, { borderBottomColor: '#727C8E', borderBottomWidth: 0.1 * vh }]}>
                    <View style={styles.imgWrap}>
                      <Image source={require('../../../assets/images/product1.png')} style={styles.productImg} />
                    </View>
                    <View>
                      <Text style={[styles.siteText, { fontWeight: 'bold', fontSize: 5.5 * vw, color: 'black' }]} >Tight Pants Legens</Text>
                      <Text style={styles.siteText} >Quantity: 2</Text>
                      <Text style={styles.siteText} >Unit Price: $ 19.00</Text>
                      <Text style={[styles.siteText, { color: '#FABC10', fontWeight: 'bold' }]}>$19.00</Text>
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: "center", paddingBottom: 10 * vh, }}>
                  {/* total selected Items */}
                  <View style={[styles.selectedCards, { borderBottomColor: '#727C8E', borderBottomWidth: 0.1 * vh }]}>
                    <View style={styles.imgWrap}>
                      <Image source={require('../../../assets/images/product3.png')} style={styles.productImg} />
                    </View>
                    <View>
                      <Text style={[styles.siteText, { fontWeight: 'bold', fontSize: 5.5 * vw, color: 'black' }]} >Tight Pants Legens</Text>
                      <Text style={styles.siteText} >Quantity: 2</Text>
                      <Text style={styles.siteText} >Unit Price: $ 19.00</Text>
                      <Text style={[styles.siteText, { color: '#FABC10', fontWeight: 'bold' }]}>$19.00</Text>
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: "center", paddingBottom: 10 * vh, }}>
                  {/* total selected Items */}
                  <View style={[styles.selectedCards, { borderBottomColor: '#727C8E', borderBottomWidth: 0.1 * vh }]}>
                    <View style={styles.imgWrap}>
                      <Image source={require('../../../assets/images/product2.png')} style={styles.productImg} />
                    </View>
                    <View>
                      <Text style={[styles.siteText, { fontWeight: 'bold', fontSize: 5.5 * vw, color: 'black' }]} >Tight Pants Legens</Text>
                      <Text style={styles.siteText} >Quantity: 2</Text>
                      <Text style={styles.siteText} >Unit Price: $ 19.00</Text>
                      <Text style={[styles.siteText, { color: '#FABC10', fontWeight: 'bold' }]}>$19.00</Text>
                    </View>
                  </View>
                </View>
              </ProgressStep>
            </ProgressSteps >
          </ScrollView >
        </KeyboardAwareScrollView>
      </View >


    );
  }
}

export default index;
