import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  Text,
  Image,
  ImageStyle,
} from 'react-native';

import {Forecast} from '../../modules/forecast/CityForecast';

/* Container
============================================================================= */
interface Props {
  forecast: Forecast;
}

interface State {}

// ForecastCard
class ForecastCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {forecast} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.forecastInfo}>
          <Image
            style={styles.forecastIcon}
            source={{uri: forecast.imageUrl}}
          />
          <View style={styles.forecastDescription}>
            <Text>{forecast.dateLabel}</Text>
            <Text>{forecast.telop}</Text>
          </View>
        </View>
      </View>
    );
  }
}

/* StyleSheet
============================================================================= */
interface Style {
  container: ViewStyle;
  forecastInfo: ViewStyle;
  forecastIcon: ImageStyle;
  forecastDescription: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#a0a0a0',
  },
  forecastInfo: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  forecastIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  forecastDescription: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5,
  },
});

/* Export
============================================================================= */
export default ForecastCard;
