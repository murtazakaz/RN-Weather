const initialState = null;

export const weatherHourly = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_WEATHER_HOURLY':
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};
