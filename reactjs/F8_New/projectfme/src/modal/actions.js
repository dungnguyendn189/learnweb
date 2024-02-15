import { SET_INPUT, ADD_INPUT } from "./Contants";

export const setInput = (payload) => ({
  type: SET_INPUT,
  payload,
});

export const addInput = (payload) => ({
  type: ADD_INPUT,
  payload,
});
