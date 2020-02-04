import React from 'react';
import {StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';

import City from 'src/modules/city/City';
import CityInfo from './CityInfo';
import CityForecast from 'src/modules/forecast/CityForecast';

/* Container
============================================================================= */
interface Props {
  cityInfo: City;
  forecast: CityForecast;
  tappedCity: (city: City) => void;
}

interface State {
  isShowMoreCityInfo: boolean;
}

// CityCard
class CityCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowMoreCityInfo: false,
    };
  }

  render() {
    const {cityInfo, forecast, tappedCity} = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => tappedCity(cityInfo)}>
        <CityInfo
          cityInfo={cityInfo}
          todayForecastDescription={
            forecast !== undefined ? forecast.forecastTitle : undefined
          }
          weatherIconUrl={
            forecast !== undefined ? forecast.forecasts![0].imageUrl : undefined
          }
          isShowMoreCityInfo={this.state.isShowMoreCityInfo}
          tappedShowModeCityInfo={this._tappedShowModeCityInfo}
        />
      </TouchableOpacity>
    );
  }

  private _tappedShowModeCityInfo = () => {
    this.setState({
      isShowMoreCityInfo: !this.state.isShowMoreCityInfo,
    });
  };
}

/* StyleSheet
============================================================================= */
interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#a0a0a0',
  },
});

/* Export
============================================================================= */
export default CityCard;
