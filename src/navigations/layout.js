import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import stores from '../stores';
import StackScreen from './stackscreen';

const NavigationLayout = () => {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default NavigationLayout;
