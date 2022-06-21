import { StyleSheet } from 'react-native'
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
  authbg: {
    width: 100 * vw,
    height: 100 * vh,
    paddingHorizontal: 2 * vw,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2 * vh,
  },
  logo: {
    width: 35 * vw,
    height: 18 * vh,
  },
  formWrapper: {
    backgroundColor: "#fff",
    marginVertical: 3 * vh,
    paddingVertical: 3 * vh,
    paddingHorizontal: 5 * vw,
    borderRadius: 10,
  },
  textCenter: {
    textAlign: 'center',
    marginVertical: 2 * vh,
    fontWeight: 'normal',
    fontSize: 8 * vw,
    color: '#2D3057'
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
    paddingVertical: 1.5 * vh,
    paddingLeft: 10 * vw,
  },
  inpIcon: {
    position: 'absolute',
    left: 12,
    top: 15,
  }
});
