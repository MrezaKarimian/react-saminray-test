export const initialStateRegister = {
  userName: "",
  email: "",
  password: "",
  fullName: "",
  age: 0,
  gender: "",
};

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, [action.payload.name]: action.payload.value };

    case "RESET_STATE":
      return initialStateRegister;

    default:
      return state;
  }
};

export default RegisterReducer;
