export interface Rain {
  "1h"?: number;
  "3h"?: number;
}

export interface Alert {
  description: string;
  event: string;
}

export interface Forecast {
  main: { temp: number; temp_min: number; temp_max: number; humidity: number };
  weather: [{ main: string; description: string }];
  clouds: { all: number };
  wind: { speed: number; deg: number };
  dt_txt: string;
  rain: Rain;
}
