import React, {useEffect, useState} from 'react';
import {getStorage} from '../helpers/sessionStorage';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import Home from '../pages/Home';
import Landingpage from '../pages/Landingpage';
import Login from '../pages/Login';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Myaccount from '../pages/Myaccount';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = ({auth}) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(auth);
  useEffect(() => {
    getStorage('token').then((response) => {
      // kalau pakai redux saja begitu apps ditutup maka session hilang
      // ditambah dengan localstorage agar ketika user sudah login dan tutup apps
      // maka sessionnya masih akan terdektsi selama localstorage value belum hilang
      if (response === null) {
        console.log('localstorage session is null');
        setIsLogin(false);
      } else {
        console.log(`localstorage session is exist ${response}`);
        setIsLogin(true);
      }
    });
  }, [isLogin]);

  const StackSwitch = () => {
    const {user} = auth;
    if (!isLogin && user === null) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Landingpage"
            component={Landingpage}
            options={{
              headerShown: false,
              title: '',
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      );
    } else {
      return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerShown: true,
            }}
          />
          <Tab.Screen
            name="Category"
            component={Category}
            options={{
              title: 'Category',
            }}
          />
          <Tab.Screen
            name="Product"
            component={Product}
            options={{
              title: 'Category',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Myaccount}
            options={{
              headerShown: true,
            }}
          />
        </Tab.Navigator>
      );
    }
  };

  return <StackSwitch />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(StackScreen);
