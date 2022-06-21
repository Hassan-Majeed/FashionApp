import { StyleSheet } from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
  header: {
    paddingVertical: 3 * vh,
    backgroundColor: '#8E5609',
  },
  headerTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 4 * vw,
  },
  container: {
    padding: 2 * vw,
    backgroundColor: '#FFFFFF'
  },
  heading: {
    fontSize: 4 * vw,
    color: '#000',
    marginVertical: 2 * vh,
  },
  cardImg: {
    width: 50 * vw,
    height: 35 * vh,
    position: 'relative',
    marginRight: 2 * vw,
    marginVertical: 1 * vh,
    borderRadius: 1 * vw,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  cardImg1: {
    width: 40 * vw,
    height: 17 * vh,
    position: 'relative',
    marginVertical: 1 * vh,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  cardContent: {
    position: 'absolute',
    bottom: 3 * vh,
    left: 3 * vw,
    maxWidth: 30 * vw,
  },
  cardContent2: {
    position: 'absolute',
    bottom: 1 * vh,
    right: 3 * vw,
    maxWidth: 30 * vw,
  },
  cardLabel: {
    paddingHorizontal: 3 * vw,
    paddingVertical: 1 * vw,
    color: '#fff',
    backgroundColor: '#A8590B',
    fontWeight: 'bold',
    fontSize: 3 * vw,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2 * vh,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: 'hidden',
  },
  cardText: {
    color: '#fff',
    fontSize: 5 * vw,
    fontWeight: 'bold'
  },
  cardText2: {
    color: '#fff',
    fontSize: 3 * vw,
    fontWeight: 'bold'
  },
  cardTextSmall: {
    color: '#fff',
    fontSize: 4 * vw,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexCol: {
    flexDirection: 'column',
  },
  col: {
    flexDirection: 'column',
    marginHorizontal: 1 * vw,
  },
  cardWrap: {
    paddingHorizontal: 1 * vw,
    paddingVertical: 2 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    overflow: 'hidden',
    width: 30 * vw,
    minHeight: 15 * vh
  },
  secCardWrap: {
    paddingHorizontal: 1 * vw,
    paddingVertical: 1 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30 * vw,
    minHeight: 15 * vh,
    borderWidth: 1,
    borderColor: '#707070',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    overflow: 'hidden',
  },
  productImg: {
    width: 8 * vh,
    height: 8 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 3 * vw,
    fontWeight: 'bold',
    marginVertical: 1 * vh,
    marginTop: 2 * vh,
    color: 'black'
  },
  secBtn: {
    backgroundColor: '#A8590B',
    paddingHorizontal: 4 * vw,
    paddingVertical: 1 * vh,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 3 * vw
  },
  banners: {
    width: '100%',
    paddingVertical: 8 * vh,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bannersContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10 * vw,
  },
  bannerHeading: {
    fontSize: 7 * vw,
    fontWeight: 'bold',
    color: '#333333',
  }

});