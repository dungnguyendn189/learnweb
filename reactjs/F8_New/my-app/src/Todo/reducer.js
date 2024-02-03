import { SET_JOB, ADD_JOB, DEL_JOB } from "./constains";

export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  let newStates;
  switch (action.type) {
    case SET_JOB:
      newStates = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newStates = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DEL_JOB:
      const newJob = [...state.jobs];
      newJob.splice(action.payload, 1);

      newStates = {
        ...state,
        jobs: newJob,
      };
      break;
    default:
      throw new Error("Invalid action.");
  }
  console.log(newStates);
  return newStates;
};

export default reducer;
