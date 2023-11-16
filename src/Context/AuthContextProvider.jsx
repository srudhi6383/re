import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
  isAuth: false,
  loading: false,
  error: null,
  token: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        loading: false,
        error: null,
        token: action.payload.token,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuth: false,
        loading: false,
        error: action.payload.error,
        token: "",
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
