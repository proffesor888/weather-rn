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
  last_updated_epoch: string;
  last_updated: string;
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
  location: ILocation | {};
  current: ICurrent | {};
  forecast?: IForecast;
}

export interface RootState {
  search: SearchState;
}
