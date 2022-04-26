import { createContext, useReducer } from "react";

const innitialState = {
  subMenu: false,
};

const menuReducer = (state = innitialState, action) => {
  switch (action.type) {
    case "OPEN_SUB":
      return { ...state, subMenu: true };
    case "CLOSE_SUB":
      return { ...state, subMenu: false };

    default:
      return state;
  }
};

export const menuContext = createContext(innitialState);

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, innitialState);

  return (
    <menuContext.Provider value={{ state, dispatch }}>
      {children}
    </menuContext.Provider>
  );
};
