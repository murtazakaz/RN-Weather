const initialState = [];

export const weatherHourly = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_WEATHER_HOURLY':
      return action.payload;

    default:
      return state;
  }
};
