const initialState = null;

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_WEATHER':
      return action.payload;

    default:
      return state;
  }
};
