/* Interface
============================================================================= */

/* WeatherApiResponse ======================================== */
export interface WeatherApiResponse {
  publicTime: string;
  title: string;
  description: WeatherApiResponseDescription;
  link: string;
  forecasts: [WeatherApiResponseForecast];
}

/* WeatherApiResponseForecast ======================================== */
export interface WeatherApiResponseDescription {
  text: string;
  publicTime: string;
}

/* WeatherApiResponseForecast ======================================== */
export interface WeatherApiResponseForecast {
  dateLabel: string;
  telop: string;
  date: string;
  image: WeatherApiResponseImage;
}

export interface WeatherApiResponseImage {
  url: string;
}
