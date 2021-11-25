const initialState = {
  user: [],
  isLoading: false,
  location: [],
};

export const mainReducer: any = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };

    case "NOTLOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "NEW_LOCATION":
      return {
        ...state,
        location: [...state.location, action.location],
      };

    case "RESET":
      return {
        ...state,
        location: [],
      };

    case "UNDO":
      return {
        ...state,
        location: state.location.slice(0, state.location.length - 1),
      };
    default:
      return state;
  }
};
