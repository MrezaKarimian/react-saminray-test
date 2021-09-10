import { ResetAddArticle } from "Provider/addArticle/addArticle.actions";
import React, { useContext, useReducer } from "react";
import { SetAddCategory } from "./addCategory.actions";
import AddCategoryReducer, {
  initialStateAddCategory,
} from "./addCategory.reducer";

const Context = React.createContext();

export const useAddCategoryCtx = () => useContext(Context);

function AddCategoryProvider({ children }) {

  const [state, dispatch] = useReducer(
    AddCategoryReducer,
    initialStateAddCategory
  );

  const handleState = (name, value) => {
    dispatch(SetAddCategory({name , value}));
  };
  const handleResetState = () => {
    dispatch(ResetAddArticle());
  };

  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddCategoryProvider;
