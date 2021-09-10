export const initialStateAddArticle = {
  title: "",
  description: "",
  categoryId: null,
  errors: [],
};

const AddArticleReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, [action.payload.name]: action.payload.value };

    case "RESET_STATE":
      return initialStateAddArticle;

    default:
      return state;
  }
};

export default AddArticleReducer;
