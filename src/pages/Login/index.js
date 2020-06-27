import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import stylesLogin from '../../asset/style';

import {mutate} from '../../services/graphql/api';

import AUTH_ACTION from '../../stores/actions/auth';

import {
  getStorage,
  setStorage,
  removeStorage,
} from '../../helpers/sessionStorage';

const Login = ({navigation, setSignIn}) => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);

  let schema = gql`
    mutation generateCustomerTokenCustom($email: String!, $password: String!) {
      generateCustomerTokenCustom(username: $email, password: $password) {
        token
      }
    }
  `;

  const storeData = async (value) => {
    try {
      let dataFormat = {
        type: 'signin',
        token: value,
      };
      const tokenJSON = JSON.stringify(dataFormat);
      setStorage('token', tokenJSON);
    } catch (e) {
      //console.log(e);
    }
  };

  const checkLocal = async () => {
    getStorage('token').then((response) => {
      console.log(response);
    });
  };
  const removeLocal = async () => {
    removeStorage('token');
    console.log('Done');
  };

  const postLogin = () => {
    let params = {email: username, password: password};

    mutate(schema, params).then((res) => {
      const {data} = res;
      const user = data.generateCustomerTokenCustom;
      storeData(user.token);
      let dataFormat = {
        type: 'signin',
        token: user.token,
      };
      setSignIn(dataFormat);
      navigation.navigate('Home');
    });
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <View style={stylesLogin.wrapper}>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Username</Text>
                <TextInput
                  placeholder="e.g. johndoe"
                  style={stylesLogin.input}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Password</Text>
                <TextInput
                  style={stylesLogin.input}
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={stylesLogin.btnSubmit}
                  onPress={postLogin}>
                  <Text style={stylesLogin.btnText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={stylesLogin.btnSubmit}
                  onPress={checkLocal}>
                  <Text style={stylesLogin.btnText}>Check Local Storage</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={stylesLogin.btnSubmit}
                  onPress={removeLocal}>
                  <Text style={stylesLogin.btnText}>Remove Local Storage</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSignIn: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Login);
