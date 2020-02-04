import actionCreatorFactory from 'typescript-fsa';
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import CityForecast from './CityForecast';

/* Action
============================================================================= */
const actionCreator = actionCreatorFactory();

export interface SearchCityForecastParam {
  cityId: string;
}

export interface SearchCityForecastResult {
  forecast: CityForecast;
}

export const forecastActions = {
  searchCityForecast: actionCreator.async<
    SearchCityForecastParam,
    SearchCityForecastResult
  >('ACTIONS_SEARCH_CITY_FORECAST'),
};

/* Reducer
============================================================================= */
export interface ForecastState {
  cityForecastSearchResult: {
    cityForecasts: {[key: string]: CityForecast};
  };
}

const initState: ForecastState = {
  cityForecastSearchResult: {
    cityForecasts: {},
  },
};

export const ForecastReducer = reducerWithInitialState(initState)
  .case(forecastActions.searchCityForecast.done, (state, done) => {
    console.log('done search today city forecast');
    const {forecast} = done.result;
    const {cityForecasts} = state.cityForecastSearchResult;
    cityForecasts[forecast.cityId] = forecast;
    return {
      ...state,
      cityForecastSearchResult: {
        cityForecasts: cityForecasts,
      },
    };
  })
  .case(forecastActions.searchCityForecast.failed, (state, failed) => {
    console.log('failed search today city forecast');
    return {
      ...state,
      cityForeacastSearchResult: {
        cityForecasts: {},
      },
    };
  });
