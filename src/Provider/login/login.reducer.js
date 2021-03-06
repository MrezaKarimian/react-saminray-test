export const initialStateLogin = {
  username: "",
  password: "",
};

const LoginReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, [action.payload.name]: action.payload.value };

    case "RESET_STATE":
      return initialStateLogin;

    default:
      return state;
  }
};

export default LoginReducer;
