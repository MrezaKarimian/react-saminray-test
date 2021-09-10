export const initialStateAddCategory = {
  name: "",
  parentCategoryId: null,
  errors: [],
};

const AddCategoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, [action.payload.name]: action.payload.value };

    case "RESET_STATE":
      return initialStateAddCategory;

    default:
      return state;
  }
};

export default AddCategoryReducer;
