import React, { useContext, useReducer } from "react";
import { ResetLogin, SetLogin } from "./login.actions";
import LoginReducer, { initialStateLogin } from "./login.reducer";

const Context = React.createContext();

export const useLoginCtx = () => useContext(Context);

function LoginProvider({ children }) {

  const [state, dispatch] = useReducer(LoginReducer, initialStateLogin);

  const handleState = (name, value) => {
    dispatch(SetLogin({name , value}));
  };
  const handleResetState = () => {
    dispatch(ResetLogin());
  };

  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default LoginProvider;
