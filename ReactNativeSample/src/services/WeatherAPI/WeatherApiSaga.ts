import {call, put, takeEvery, all} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {
  SearchCityForecastParam,
  forecastActions,
} from '../../modules/forecast/CityForecastModule';
import {cityListActions, SearchCityParams} from '../../modules/city/CityModule';
import CityForecast, {Forecast} from 'src/modules/forecast/CityForecast';
import {WeatherApiResponse} from './WeatherApiResponse';
import {WeatherApi} from './WeatherApi';
import {__dummyCities__} from '../../modules/city/City';

/* Export
============================================================================= */
export default [
  takeEvery(forecastActions.searchCityForecast.started, startSearch),
  // TODO 一旦ここに記述
  takeEvery(cityListActions.searchCityList.started, startCitySearch),
];

function* startCitySearch(action: Action<SearchCityParams>) {
  // ダミーを返す
  const cityList = __dummyCities__;

  yield put(
    cityListActions.searchCityList.done({
      params: action.payload,
      result: {cityList: cityList},
    }),
  );

  yield all(
    cityList.map(city => {
      const forecastAction: Action<SearchCityForecastParam> = {
        payload: {cityId: city.id},
      };
      return call(startSearch, forecastAction);
    }),
  );
}

function* startSearch(action: Action<SearchCityForecastParam>) {
  const result: {
    response?: WeatherApiResponse;
    error?;
  } = yield call(WeatherApi.fetch, action.payload);

  if (result.response === undefined) {
    const apiError = result.error!;
    yield put(
      forecastActions.searchCityForecast.failed({
        params: action.payload,
        error: apiError,
      }),
    );

    return;
  }

  // 変換
  let forecasts: Forecast[] = [];

  result.response.forecasts.map(forecast => {
    const data: Forecast = {
      dateLabel: forecast.dateLabel,
      telop: forecast.telop,
      imageUrl: forecast.image.url,
    };
    forecasts.push(data);
  });

  const cityForecast: CityForecast = {
    cityId: action.payload.cityId,
    forecastTitle: result.response.description.text,
    forecasts: forecasts,
  };

  yield put(
    forecastActions.searchCityForecast.done({
      params: action.payload,
      result: {forecast: cityForecast},
    }),
  );
}
