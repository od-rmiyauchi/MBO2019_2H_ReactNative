/**
 * ==============================================================================
 * TodayCityForecast
 * City毎の今日の予報ViewModel
 * ------------------------------------------------------------------------------
 */

export interface Forecast {
  dateLabel: string;
  telop: string;
  imageUrl: string;
}

class CityForecast {
  cityId: string; // 市ID
  forecastTitle: string; // 今日の天気
  forecasts?: Forecast[];

  constructor() {
    this.cityId = '';
    this.forecastTitle = '';
  }
}

/* Export
============================================================================= */
export default CityForecast;
