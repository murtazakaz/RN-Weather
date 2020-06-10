import React from 'react';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import renderer from 'react-test-renderer';

import WelcomeScreen from '../src/screens/Welcome/WelcomeScreen';

const middlewares = [];
const mockStore = configureStore(middlewares);

const INITIAL_STATE = {};

const storeWeather = () => ({
  type: 'STORE_WEATHER',
  payload: INITIAL_STATE,
});

const storeWeatherHourly = () => ({
  type: 'STORE_WEATHER_HOURLY',
  payload: INITIAL_STATE,
});

describe('Welcome Screen', () => {
  const store = mockStore(INITIAL_STATE);

  it('should renders correctly', async () => {
    const tree = renderer.create(
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>,
    );
    const json = tree.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('getweather details', async () => {
    const tree = renderer.create(
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>,
    );
    const json = tree.getInstance();
  });

  it('storeWeatherHourly', () => {
    store.dispatch(storeWeatherHourly());

    const actions = store.getActions();

    const expectedPayload = {
      type: 'STORE_WEATHER_HOURLY',
      payload: INITIAL_STATE,
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
