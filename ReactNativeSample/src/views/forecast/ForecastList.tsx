import React from 'react';
import {StyleSheet, ViewStyle, FlatList} from 'react-native';
import CityForecast from '../../modules/forecast/CityForecast';
import ForecastCard from './ForecastCard';

/* <ForecastList />
============================================================================= */
interface Props {
  forecast: CityForecast;
}

// ForecastList
const ForecastList: React.FunctionComponent<Props> = (props: Props) => {
  const {forecast} = props;
  const forecasts = forecast.forecasts;

  return (
    <FlatList
      style={styles.container}
      bounces={false}
      data={forecasts}
      extraData={forecasts}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      renderItem={({item}) => <ForecastCard forecast={item} />}
    />
  );
};

/* StyleSheet
============================================================================= */
interface Style {
  container: ViewStyle;
  separator: ViewStyle;
  listItem: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
  },
  separator: {
    width: '100%',
    height: 6,
    backgroundColor: '#555',
  },
  listItem: {
    width: '100%',
    height: 100,
  },
});

/* Export
============================================================================= */
export default ForecastList;
