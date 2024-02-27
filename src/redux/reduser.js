const initialState = {
  cash: 0,
};

// actionb: 2
// type - ТИП
// payload - биз жоноткон данный

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { ...state, cash: state.cash + action.payload };
    case "TAKE_MONEY":
      return {
        ...state,
        cash: action.payload > state.cash ? 0 : state.cash - action.payload,
      };
    default:
      return state;
  }
};
