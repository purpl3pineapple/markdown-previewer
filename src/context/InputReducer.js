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
  }
};

export default inputReducer;
