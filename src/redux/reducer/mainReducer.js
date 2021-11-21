const initialState = {
  user: [],
  isLoading: false,
};

export const mainReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

