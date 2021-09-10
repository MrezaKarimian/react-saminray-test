import React, { useContext, useReducer } from "react";
import { ResetRegister, SetRegister } from "./register.actions";
import RegisterReducer, { initialStateRegister } from "./register.reducer";

const Context = React.createContext();

export const useRegisterCtx = () => useContext(Context);

function RegisterProvider({ children }) {

  const [state, dispatch] = useReducer(RegisterReducer, initialStateRegister);

  const handleState = (name, value) => {
    dispatch(SetRegister({name , value}));
  };
  const handleResetState = () => {
    dispatch(ResetRegister());
  };

  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default RegisterProvider;
