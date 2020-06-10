import {config} from '../config/environment';
import {fetchAPI} from './fetch';

export const _getWeatherByLocation = location => {
  let route = `weather?lat=${location.coords.latitude}&lon=${
    location.coords.longitude
  }&appid=${config.WEATHER_KEY}`;

  let method = {
    method: 'GET',
  };

  console.log(config.BASE_WEATHER_URL, route, method);
  return fetchAPI(config.BASE_WEATHER_URL, route, method);
};

export const _getWeatherByLocationHourly = location => {
  let route = `onecall?lat=${location.coords.latitude}&lon=${
    location.coords.longitude
  }&units=metric&exclude=current,minutely,hourly&appid=${config.WEATHER_KEY}`;

  let method = {
    method: 'GET',
  };

  console.log(config.BASE_WEATHER_URL, route, method);
  return fetchAPI(config.BASE_WEATHER_URL, route, method);
};
