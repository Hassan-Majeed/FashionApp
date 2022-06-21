import { StyleSheet } from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
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
  container: {
    padding: 2 * vw,
    backgroundColor: '#FFFFFF'
  },
  heading: {
    fontSize: 4 * vw,
    color: '#000',
    marginVertical: 2 * vh,
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
  }
});