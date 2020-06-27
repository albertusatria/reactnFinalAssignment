/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationLayout from './navigations/layout';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationLayout />
    </SafeAreaProvider>
  );
};

export default App;
