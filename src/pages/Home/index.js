import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';

import {getRootCategories, getCategoryById} from '../../services/graphql';

import stylesApp from '../../asset/style';
import stylesHome from '../../asset/home';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({auth}) => {
  const [categories, setCategories] = useState([]);
  const [categorieRows, setCategorieRows] = useState(4);
  const [validCategoryImg, setValidCategoryImg] = useState(true);
  useEffect(() => {
    // get root category from gql then set "categories" state
    const getCategories = async () => {
      getRootCategories()
        .then((response) => {
          const {categoryList} = response.data;
          const dataCategory = !categoryList ? [] : categoryList[0].children;
          setCategories(dataCategory);
          console.log(dataCategory);
        })
        .catch();
    };
    // hit function to get root category
    getCategories();
  }, []);

  // foreach root category children
  const CategoryItem = ({title, categoryImg}) => {
    return (
      <View style={stylesHome.categoryItems}>
        <Image
          source={{
            uri: validCategoryImg
              ? categoryImg
              : 'https://reactjs.org/logo-og.png',
          }}
          style={{width: 70, height: 70}}
          onError={(e) => {
            setValidCategoryImg(false);
          }}
        />
        <Text style={stylesHome.categoryListTitle}>{title}</Text>
      </View>
    );
  };

  // set root category list
  const CategoryList = () => {
    return (
      <FlatList
        data={categories}
        horizontal={false}
        numColumns={categorieRows}
        columnWrapperStyle={stylesHome.categoryListContainerView}
        renderItem={({item}) => (
          <CategoryItem title={item.name} categoryImg={item.image} />
        )}
        keyExtractor={(item) => '' + item.id} // set to string https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript
      />
    );
  };

  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <View>
              <Text style={stylesApp.pageTitle}>HOMEPAGE</Text>
            </View>
            <ScrollView style={stylesHome.categoryListContainer}>
              <View>{CategoryList()}</View>
            </ScrollView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Home);
