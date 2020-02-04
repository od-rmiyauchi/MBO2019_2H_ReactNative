import {createStackNavigator} from 'react-navigation';
import CityListScreen from './cityList/CityListScreen';
import ForecastScreen from './forecast/ForecastScreen';

const RootNavigator = createStackNavigator(
  {
    CityList: {screen: CityListScreen},
    Forecast: {screen: ForecastScreen},
  },
  {
    initialRouteName: 'CityList',
  },
);

/* Export
============================================================================= */
export default RootNavigator;
