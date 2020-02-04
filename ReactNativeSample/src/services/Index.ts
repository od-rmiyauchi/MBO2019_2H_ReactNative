import {all} from 'redux-saga/effects';

import WeatherApiSaga from './WeatherAPI/WeatherApiSaga';

export default function* rootSagas() {
  yield all([...WeatherApiSaga]);
}
