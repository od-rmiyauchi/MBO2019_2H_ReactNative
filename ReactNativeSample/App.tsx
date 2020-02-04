/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import configureStore from './src/ConfigureStore';
import CityListScreen from './src/views/cityList/CityListScreen';
import ForecastScreen from './src/views/forecast/ForecastScreen';
import RootNavigation from './src/views/ConfigureNavigation';

declare var global: {HermesInternal: null | {}};

const {store} = configureStore();

const App = () => {
  const Layout = createAppContainer(RootNavigation);

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
