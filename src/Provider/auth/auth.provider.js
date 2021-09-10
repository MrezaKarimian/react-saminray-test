import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { LogOutAuth, SetAuth } from "./auth.actions";
import AuthReducer, { initialStateAuth } from "./auth.reducer";

const Context = React.createContext();

export const useAuthCtx = () => useContext(Context);

function AuthProvider({ children }) {
  const history = useHistory();

  const [user, dispatch] = useReducer(AuthReducer, initialStateAuth);

  const handleLogout = () => {
    dispatch(LogOutAuth());
    localStorage.removeItem("USER_DATA");
    console.clear();
    history.push("/");
  };
  const setUser = (user) => {
    dispatch(SetAuth(user));
    localStorage.setItem("USER_DATA", JSON.stringify(user));
  };

  const value = { user, dispatch, actions: { handleLogout, setUser } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AuthProvider;
