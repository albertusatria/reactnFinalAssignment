import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const pricingStyle = StyleSheet.create({
  priceContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  specialPrice: {
    color: 'red',
  },
  oldPrice: {
    color: 'grey',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  regularPrice: {
    color: '#000',
  },
  priceDefault: {
    fontSize: 11,
  },
});

export default function Price({priceRange}) {
  const regularPrice = priceRange.minimum_price.regular_price;
  const finalPrice = priceRange.minimum_price.final_price;
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
  return (
    <View style={pricingStyle.priceContainer}>
      {regularPrice.value !== finalPrice.value ? (
        <Text style={[pricingStyle.oldPrice, pricingStyle.priceDefault]}>
          {formatter.format(regularPrice.value)}
        </Text>
      ) : null}
      <Text
        style={[
          regularPrice.value !== finalPrice.value
            ? pricingStyle.specialPrice
            : pricingStyle.regularPrice,
          pricingStyle.priceDefault,
        ]}>
        {formatter.format(finalPrice.value)}
      </Text>
    </View>
  );
}
