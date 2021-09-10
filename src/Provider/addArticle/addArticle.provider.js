import React, { useContext, useReducer } from "react";
import { ResetAddArticle, SetAddArticle } from "./addArticle.actions";
import AddArticleReducer, {
  initialStateAddArticle,
} from "./addArticle.reducer";

const Context = React.createContext();

export const useAddArticleCtx = () => useContext(Context);

function AddArticleProvider({ children }) {
  const [state, dispatch] = useReducer(
    AddArticleReducer,
    initialStateAddArticle
  );

  const handleState = (name, value) => {
    dispatch(SetAddArticle({ name, value }));
  };
  const handleResetState = () => {
    dispatch(ResetAddArticle());
  };

  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddArticleProvider;
