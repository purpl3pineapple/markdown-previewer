const inputReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

    case "GET_MD":
      return {
        ...state,
        input: action.payload,
        loading: false,
      };

    case "CLEAR_MD":
      return {
        ...state,
        input: "",
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
  }
};

export default inputReducer;
