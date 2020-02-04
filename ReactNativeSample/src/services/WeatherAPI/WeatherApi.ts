import {SearchCityForecastParam} from '../../modules/forecast/CityForecastModule';
import axios from 'axios';
import {WeatherApiResponse} from './WeatherApiResponse';

const API_BASE: string =
  'http://weather.livedoor.com/forecast/webservice/json/v1';

async function fetch(apiParam: SearchCityForecastParam) {
  console.log('start fetch');
  try {
    const url = `${API_BASE}?city=${apiParam.cityId}`;
    const axiosResponse = await axios.get<WeatherApiResponse>(url);
    const response = axiosResponse.data;

    return {response};
  } catch (error) {
    return {error: error};
  }
}

export const WeatherApi = {
  fetch,
};
