import React from 'react';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import DetailScreen from '../src/screens/DetailScreen/DetailScreen';

import renderer from 'react-test-renderer';

const middlewares = [];
const mockStore = configureStore(middlewares);

const INITIAL_STATE = {
  weather: {
    name: '',
    sys: {
      country: '',
    },
    main: {
      humidity: '',
    },
    wind: {
      speed: '',
    },
  },
};

const updateLocation = () => ({
  type: 'UPDATE_LOCATION',
  payload: INITIAL_STATE,
});

describe('Detail Screen', () => {
  const store = mockStore(INITIAL_STATE);

  it('should renders correctly', async () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DetailScreen />
      </Provider>,
    );
    const json = tree.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('dispatch update location', () => {
    store.dispatch(updateLocation());

    const actions = store.getActions();

    const expectedPayload = {type: 'UPDATE_LOCATION', payload: INITIAL_STATE};
    expect(actions).toEqual([expectedPayload]);
  });
});
