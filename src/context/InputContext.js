import { createContext, useReducer } from "react";
import inputReducer from "./InputReducer";

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const init = { input: "# Header 1\n", loading: false };

  const [state, dispatch] = useReducer(inputReducer, init);

  return (
    <InputContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputContext;
