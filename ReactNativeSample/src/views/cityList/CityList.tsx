import React from 'react';
import {StyleSheet, ViewStyle, FlatList} from 'react-native';
import City from 'src/modules/city/City';
import CityCard from './CityCard';
import CityForecast from '../../modules/forecast/CityForecast';

/* <CityList />
============================================================================= */
interface Props {
  citiesInfo: City[];
  forecasts: {[key: string]: CityForecast};
  tappedCity: (city: City) => void;
}

// CityList
const CityList: React.FunctionComponent<Props> = (props: Props) => {
  const {citiesInfo, forecasts, tappedCity} = props;

  return (
    <FlatList
      style={styles.container}
      bounces={false}
      data={citiesInfo}
      extraData={citiesInfo}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      renderItem={({item}) => (
        <CityCard
          cityInfo={item}
          forecast={forecasts[item.id]}
          tappedCity={() => tappedCity(item)}
        />
      )}
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
export default CityList;
