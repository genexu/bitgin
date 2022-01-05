import { createContext, useReducer } from 'react';

export const DrawboxContext = createContext();

const initState = {
  size: { width: 128, height: 128 },
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const DrawboxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <DrawboxContext.Provider value={{ state, dispatch }}>{children}</DrawboxContext.Provider>;
}

export default DrawboxProvider;
