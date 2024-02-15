import { SET_INPUT, ADD_INPUT } from "./Contants";

const initState = {
  jobs: [],
  input: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ADD_INPUT:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    default:
      throw new Error("Invalid action.");
  }
};

export { initState };
export default reducer;
