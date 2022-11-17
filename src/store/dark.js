import React, { useReducer } from 'react';

const initialState = {
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
export const DarkContext = React.createContext({});

export const DarkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DarkContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkContext.Provider>
  );
};
