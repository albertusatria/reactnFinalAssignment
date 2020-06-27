import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {getProductsByCategoryId} from '../../services/graphql';
import {useNavigation} from '@react-navigation/native';
import productListStyle from '../../asset/productlist';
import Price from '../../helpers/price';

const Category = ({route}) => {
  const {categoryid} = route.params;
  const {categoryname} = route.params;

  const categoryId = categoryid;
  const [productlist, setProductlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [validProductImg, setValidProductImg] = useState(true);
  const [productsRows, setProductsRows] = useState(3);

  useEffect(() => {
    // get product list on selected category then set the productlist data
    const getCategoryPage = async () => {
      getProductsByCategoryId({
        categoryId,
        currentPage,
        pageSize: 15,
        sortBy: {price: 'ASC'},
      })
        .then((response) => {
          const productItems = response.data.products.items;
          setProductlist(productItems);
          console.log(productItems);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // hit function to retrieve products on seleced category
    getCategoryPage();
  }, [categoryId, categoryid, currentPage]);

  // foreach productlist children
  const ProductItem = ({item}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Product', {productdata: item})}>
        <View style={productListStyle.categoryItems}>
          <Image
            source={{
              uri: validProductImg
                ? item.thumbnail.url
                : 'https://reactjs.org/logo-og.png',
            }}
            style={productListStyle.productImg}
            onError={(e) => {
              setValidProductImg(false);
            }}
          />
          <Text style={productListStyle.categoryListTitle}>{item.name}</Text>
          <Price priceRange={item.price_range} />
        </View>
      </TouchableOpacity>
    );
  };

  // set productlist foreach
  const CategoryProductList = () => {
    return (
      <FlatList
        data={productlist}
        horizontal={false}
        numColumns={productsRows}
        columnWrapperStyle={productListStyle.productListContainerView}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={(item) => '' + item.id} // set to string https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript
      />
    );
  };

  return (
    <View>
      <Text style={productListStyle.categoryPageTitle}>{categoryname}</Text>
      <View>
        <ScrollView style={productListStyle.productListContainer}>
          <View>{CategoryProductList()}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
