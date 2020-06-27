import {StyleSheet, Dimensions} from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width / 800;

const productListStyle = StyleSheet.create({
  categoryPageTitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  productListContainerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  categoryItems: {
    marginBottom: 40,
  },
  categoryListTitle: {
    fontSize: 10,
    marginTop: 10,
    maxWidth: '80%',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  productImg: {
    width: win.width * 0.29,
    height: 800 * ratio * 0.29,
  },
});

export default productListStyle;
