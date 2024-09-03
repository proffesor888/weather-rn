export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime_epoch?: number;
  localtime: string;
}

export interface ICurrent {
  last_updated_epoch: number;
  last_updated: string;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  uv: number;
  time_epoch: number;
  precip_mm?: number;
  precip_in?: number;
  snow_cm?: number;
  feelslike_f?: number;
  windchill_c?: number;
  windchill_f?: number;
  heatindex_c?: number;
  heatindex_f?: number;
  dewpoint_c?: number;
  dewpoint_f?: number;
  will_it_rain?: number;
  chance_of_rain?: number;
  will_it_snow?: number;
  chance_of_snow?: number;
  vis_km?: number;
  vis_miles?: number;
  gust_mph?: number;
  gust_kph?: number;
}

export interface IForecast {
  forecastday: IForecastDay[];
}

export interface IForecastDay {
  date: string;
  date_epoch: number;
  hour: ICurrent[];
}

export interface SearchState {
  location?: ILocation;
  current?: ICurrent;
  forecast?: IForecast;
  error?: unknown;
}

export interface RootState {
  search: SearchState;
}
