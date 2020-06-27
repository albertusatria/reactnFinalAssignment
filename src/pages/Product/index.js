import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import productPageStyle from '../../asset/product';
import Price from '../../helpers/price';

const Product = ({route}) => {
  const [validProductImg, setValidProductImg] = useState(true);
  const {productdata} = route.params;

  return (
    <View style={productPageStyle.productContainer}>
      <View>
        <Text style={productPageStyle.productName}>{productdata.name}</Text>
        <Text style={productPageStyle.sku}>SKU: {productdata.sku}</Text>
        <Price priceRange={productdata.price_range} />
      </View>
      <View>
        <Image
          source={{
            uri: validProductImg
              ? productdata.image.url
              : 'https://reactjs.org/logo-og.png',
          }}
          style={productPageStyle.productImg}
          onError={(e) => {
            setValidProductImg(false);
          }}
        />
      </View>
    </View>
  );
};

export default Product;
