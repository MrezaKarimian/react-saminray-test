export const initialStateAuth = null;

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGOUT":
      return null;

    case "SET_USER":
      return action.payload;

    default:
      return state;
  }
};

export default AuthReducer;
