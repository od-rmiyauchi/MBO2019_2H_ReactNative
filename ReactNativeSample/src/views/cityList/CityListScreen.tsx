import React from 'react';
import {Action} from 'typescript-fsa';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {View, ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

import City from 'src/modules/city/City';
import {
  CityListState,
  cityListActions,
  SearchCityParams,
} from '../../modules/city/CityModule';
import {ForecastState} from '../../modules/forecast/CityForecastModule';
import {ForecastScreenNavigationParams} from '../forecast/ForecastScreen';
import {CombinedState} from '../../modules';
import CityList from './CityList';

/* mapStateToProps
============================================================================= */
interface StateProps {
  cityListState: CityListState;
  forecastState: ForecastState;
}
function mapStateToProps(combinedState: CombinedState): StateProps {
  const {cityListState} = combinedState;
  // return {cityListState};
  const {forecastState} = combinedState;
  return {cityListState, forecastState};
}

/* mapDispatchToProps
============================================================================= */
interface DispatchProps {
  searchCityList: (payload: SearchCityParams) => Action<SearchCityParams>;
}
function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    searchCityList: (payload: SearchCityParams) =>
      dispatch(cityListActions.searchCityList.started(payload)),
  };
}

/* Container
============================================================================= */
interface OwnProps {
  navigation: NavigationScreenProp<any, any>;
}

interface Props extends StateProps, DispatchProps, OwnProps {}

interface State {}

class CityListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: '今日の天気',
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    // 値の更新をReduxで一本化したいため、画面表示直後にリストを取ってくるようActionを実行
    this.props.searchCityList({cityList: []});
  }

  render() {
    const cityList = this.props.cityListState.searchResult.cityList;
    const forecasts = this.props.forecastState.cityForecastSearchResult
      .cityForecasts;

    return (
      <View style={styles.container}>
        <CityList
          citiesInfo={cityList}
          forecasts={forecasts}
          tappedCity={this._tappedCity}
        />
      </View>
    );
  }

  private _tappedCity = (city: City) => {
    console.log(city.cityName);
    const params: ForecastScreenNavigationParams = {cityId: city.id};
    this.props.navigation.navigate('Forecast', params);
  };
}

/* StyleSheet
============================================================================= */
interface Style {
  container: ViewStyle;
  cityContainer: ViewStyle;
  cityLabel: TextStyle;
  cityButton: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    height: '100%',
  },
  cityContainer: {
    height: 100,
  },
  cityLabel: {
    fontSize: 12,
    textAlign: 'left',
    color: '#a0a0a0',
  },
  cityButton: {
    fontSize: 12,
    backgroundColor: 'white',
  },
});

/* Export
============================================================================= */
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(CityListScreen);
