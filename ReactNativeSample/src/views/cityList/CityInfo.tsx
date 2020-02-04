import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  Text,
  ImageStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import City from 'src/modules/city/City';

const IMAGE_NO_PHOTO_PIC = require('../../resources/images/no_photo/NoPhoto.png');

/* <CityInfo />
============================================================================= */
interface Props {
  cityInfo: City;
  todayForecastDescription?: string;
  weatherIconUrl?: string;
  isShowMoreCityInfo: boolean;
  tappedShowModeCityInfo: () => void;
}

// CityInfo
const CityInfo: React.FunctionComponent<Props> = (props: Props) => {
  const {
    cityInfo,
    todayForecastDescription,
    weatherIconUrl,
    isShowMoreCityInfo,
    tappedShowModeCityInfo,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.cityInfoContainer}>
        <View style={styles.cityImageContainer}>
          {weatherIconUrl !== undefined ? (
            <Image source={{uri: weatherIconUrl}} style={styles.cityImage} />
          ) : (
            <Image source={IMAGE_NO_PHOTO_PIC} style={styles.cityImage} />
          )}
        </View>
        <View style={styles.cityDetailContainer}>
          <Text style={styles.cityNameLabel}>{cityInfo.cityName}</Text>
          <View style={styles.cityAppendixContainer}>
            <Text style={styles.prefectureNameLabel}>
              {cityInfo.prefectureName}
            </Text>
            <Text style={styles.detailLabel}>
              {cityInfo.detail !== undefined ? cityInfo.detail : ''}
            </Text>
          </View>
        </View>
        <View style={styles.accessoriesContainer}>
          <View style={styles.accessoryContainer}>
            <Icon name="right" size={12} color={'#777'} />
          </View>

          {todayForecastDescription !== undefined ? (
            <TouchableOpacity
              style={styles.moreTouchableContainer}
              onPress={() => {
                tappedShowModeCityInfo();
              }}>
              {isShowMoreCityInfo ? (
                <Icon name="up" size={12} color={'#555'} />
              ) : (
                <Icon name="down" size={12} color={'#555'} />
              )}

              <Text style={styles.moreLabel}>more</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {isShowMoreCityInfo ? (
        <View style={styles.forecastContainer}>
          <Text>{todayForecastDescription}</Text>
        </View>
      ) : null}
    </View>
  );
};

/* StyleSheet
============================================================================= */
interface Style {
  container: ViewStyle;
  cityInfoContainer: ViewStyle;
  cityImageContainer: ViewStyle;
  cityImage: ImageStyle;
  cityDetailContainer: ViewStyle;
  cityNameLabel: TextStyle;
  cityAppendixContainer: ViewStyle;
  prefectureNameLabel: TextStyle;
  detailLabel: TextStyle;
  accessoriesContainer: ViewStyle;
  accessoryContainer: ViewStyle;
  moreTouchableContainer: ViewStyle;
  moreLabel: TextStyle;
  forecastContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  cityInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cityImageContainer: {
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cityImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  cityDetailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginHorizontal: 10,
  },
  cityNameLabel: {
    fontSize: 22,
    textAlign: 'left',
    color: '#333',
  },
  cityAppendixContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  prefectureNameLabel: {
    fontSize: 14,
    textAlign: 'left',
    color: '#555',
  },
  detailLabel: {
    fontSize: 16,
    textAlign: 'left',
    color: '#555',
  },
  accessoriesContainer: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  accessoryContainer: {
    width: 20,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreTouchableContainer: {
    width: 70,
    height: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  moreLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  forecastContainer: {
    flex: 1,
    // height: 100,
    paddingTop: 5,
  },
});

/* Export
============================================================================= */
export default CityInfo;
