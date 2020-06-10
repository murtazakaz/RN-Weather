const initialState = {};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.payload;

    default:
      return state;
  }
};
