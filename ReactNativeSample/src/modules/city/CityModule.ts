import actionCreatorFactory from 'typescript-fsa';
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import City from './City';

/* Action
============================================================================= */
const actionCreator = actionCreatorFactory();

export interface SearchCityParams {
  // callback?: (state: SearchCityResult) => void;
}

export interface SearchCityResult {
  cityList: City[]; // City配列
}

export const cityListActions = {
  searchCityList: actionCreator.async<SearchCityParams, SearchCityResult>(
    'ACTIONS_SEARCH_CITY_LIST',
  ),
};

/* Reducer
============================================================================= */
export interface CityListState {
  searchResult: {
    cityList: City[];
  };
}

const initState: CityListState = {
  searchResult: {
    cityList: [],
  },
};

export const CityListReducer = reducerWithInitialState(initState).case(
  cityListActions.searchCityList.done,
  (state, done) => {
    return {...state, searchResult: done.result};
  },
);
