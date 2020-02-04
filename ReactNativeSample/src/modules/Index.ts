import {combineReducers} from 'redux';

import {CityListState, CityListReducer} from './city/CityModule';
import {ForecastState, ForecastReducer} from './forecast/CityForecastModule';

export interface CombinedState {
  cityListState: CityListState;
  forecastState: ForecastState;
}

export const rootReducer = combineReducers<CombinedState>({
  cityListState: CityListReducer,
  forecastState: ForecastReducer,
});
