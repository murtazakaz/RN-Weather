import {combineReducers} from 'redux';
import {location} from './location';
import {weather} from './weather';
import {weatherHourly} from './weatherHourly';

export default combineReducers({
  location: location,
  weather: weather,
  weatherHourly: weatherHourly,
});
