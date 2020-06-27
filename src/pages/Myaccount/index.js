import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesLogin from '../../asset/style';
import {getStorage, removeStorage} from '../../helpers/sessionStorage';

const Myaccount = ({navigation}) => {
  const logout = () => {
    removeStorage('token').then((response) => {
      //navigation.navigate('Landingpage');
      console.log('Logout');
    });
  };
  const checkLocal = async () => {
    getStorage('token').then((response) => {
      console.log(response);
    });
  };
  return (
    <View>
      <Text>Profile Page</Text>
      <Text>
        Lorem eiusmod nostrud excepteur consectetur duis eu. Laborum sint
        officia nostrud consequat deserunt deserunt et dolor pariatur cillum
        proident quis. Consequat quis exercitation est sit incididunt laborum ex
        culpa in sit mollit do consequat. Pariatur excepteur eiusmod consectetur
        nulla consectetur proident duis fugiat id ad sunt. Nostrud quis laboris
        ex et in dolor velit velit veniam deserunt duis exercitation eiusmod.
        Consectetur sunt et ullamco dolor aliquip ad ullamco nostrud
        exercitation eu sint sit. Eu exercitation excepteur dolor Lorem
        excepteur ipsum ea. Consequat excepteur nulla cupidatat amet aute.
        Aliquip pariatur Lorem tempor eu ut occaecat ipsum consequat ullamco
        magna. Ut deserunt commodo ullamco sunt nisi aliqua ullamco adipisicing
        duis deserunt cillum adipisicing fugiat.
      </Text>
      <View>
        <TouchableOpacity style={stylesLogin.btnSubmit} onPress={checkLocal}>
          <Text style={stylesLogin.btnText}>Check Local Storage</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={stylesLogin.btnSubmit} onPress={logout}>
          <Text style={stylesLogin.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Myaccount;
