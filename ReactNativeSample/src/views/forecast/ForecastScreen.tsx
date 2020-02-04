import React from 'react';
import {Action} from 'typescript-fsa';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {View, ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {
  SearchCityForecastParam,
  ForecastState,
  forecastActions,
} from '../../modules/forecast/CityForecastModule';
import {CombinedState} from '../../modules';
import ForecastList from './ForecastList';

/* mapStateToProps
============================================================================= */
interface StateProps {
  forecastState: ForecastState;
}
function mapStateToProps(combinedState: CombinedState): StateProps {
  const {forecastState} = combinedState;
  return {forecastState};
}

/* mapDispatchToProps
============================================================================= */
interface DispatchProps {
  searchCityForecast: (
    payload: SearchCityForecastParam,
  ) => Action<SearchCityForecastParam>;
}
function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    searchCityForecast: (payload: SearchCityForecastParam) =>
      dispatch(forecastActions.searchCityForecast.started(payload)),
  };
}

/* Container
============================================================================= */
interface OwnProps {
  navigation: NavigationScreenProp<any, ForecastScreenNavigationParams>;
}

interface Props extends StateProps, DispatchProps, OwnProps {}

interface State {}

export interface ForecastScreenNavigationParams {
  cityId: string;
}

class ForecastScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: '予報',
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const cityId = this.props.navigation.getParam('cityId');
    this.props.searchCityForecast({cityId: cityId});
  }

  render() {
    const cityId = this.props.navigation.getParam('cityId');
    const {cityForecasts} = this.props.forecastState.cityForecastSearchResult;
    const forecast = cityForecasts[cityId];

    return (
      <View style={styles.container}>
        {forecast !== undefined ? <ForecastList forecast={forecast} /> : null}
      </View>
    );
  }
}

interface Style {
  container: ViewStyle;
  textLabel: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    height: '100%',
  },
  textLabel: {
    flex: 1,
  },
});

/* Export
============================================================================= */
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ForecastScreen);
