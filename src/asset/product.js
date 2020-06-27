import {StyleSheet, Dimensions} from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width / 800;

const productPageStyle = StyleSheet.create({
  productContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sku: {
    fontSize: 10,
    color: 'grey',
  },
  productImg: {
    width: win.width * 0.4,
    height: 800 * ratio * 0.4,
  },
});

export default productPageStyle;
