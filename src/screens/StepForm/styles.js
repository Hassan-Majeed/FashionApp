import { StyleSheet } from 'react-native'
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
  formWrapper: {
    backgroundColor: "#fff",
    paddingVertical: 4 * vh,
    paddingHorizontal: 6 * vw,
  },
  mainText: {
    marginVertical: 2 * vh,
    fontWeight: 'normal',
    fontSize: 8 * vw,
    color: '#707070',
    marginTop: 9 * vh,
  },
  inpWrap: {
    position: 'relative',
    marginVertical: 3 * vh,
  },
  textRight: {
    textAlign: 'right',
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 4 * vw
  },
  primBtn: {
    backgroundColor: '#8E5609',
    color: '#fff',
    paddingVertical: 2 * vh,
    borderRadius: 10,
    marginVertical: 3 * vh,
    fontWeight: 'bold',
  }
  ,
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 4 * vw
  },
  secText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 4 * vw,
    fontWeight: 'bold',
    marginVertical: 2 * vh
  },
  primInp: {
    borderColor: '#EFEFEF',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 1 * vh,
    paddingLeft: 10 * vw,
  },
  inpWrap: {
    position: 'relative',
    marginVertical: 10,
  },
  inpIcon: {
    position: 'absolute',
    left: 12,
    top: 15,
  },
  pageTitle: {
    fontSize: 6 * vw,
    fontWeight: 'bold',
    marginVertical: 3 * vh,
    marginTop: 2 * vh,
    paddingLeft: 3 * vw,
    color: '#515C6F'
  },
  goBackBtn: {
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    fontSize: 8 * vw,
    color: '#FFFFFF',
  },
  header: {
    paddingVertical: 5 * vh,
    backgroundColor: '#8E5609',
    justifyContent: 'center',
  },
  headerTxt: {
    color: '#fff',
    fontSize: 5 * vw,
    position: 'relative'
  },
  bgWhite: {
    backgroundColor: '#fff',
    paddingBottom: 15 * vh
  },
  smallBoxs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentCards: {
    borderColor: 'red',
    backgroundColor: '#A8590B',
    paddingHorizontal: 15 * vw,
    paddingVertical: 5 * vh,
    margin: 5 * vw,
    borderRadius: 10
  },
  siteText: {
    fontSize: 5 * vw,
    fontWeight: 'bold',
    marginBottom: 0.5 * vh
  },
  imgWrap: {
    paddingHorizontal: 5 * vw,
    paddingVertical: 2 * vh
  },
  selectedCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: 'red', 
    paddingBottom: 5 * vh,
  },
  productImg: {
    width: 25 * vw,
    height: 10 * vh,
    resizeMode: 'contain',
  }

});
