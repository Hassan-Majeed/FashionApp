import { StyleSheet } from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
  productWrap: {
    backgroundColor: '#fff',
    paddingHorizontal: 1 * vw,
    paddingVertical: 1 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    minHeight: 28 * vh,
    width: 30 * vw,
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5 * vw,
      height: 0.5 * vw
    },
    shadowOpacity: 0.1,
    shadowRadius: 2 * vw,
    elevation: 15
  },
  productImg: {
    width: 25 * vw,
    height: 15 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 1 * vh
  },
  productTitle: {
    fontSize: 3 * vw,
    fontWeight: 'bold',
    color: '#515C6F',
    textAlign: 'center',
    marginBottom: 1 * vh

  },
  price: {
    fontSize: 4 * vw,
    color: '#FABC10',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});