import { createSelector } from "reselect";
import { FEATURE_NAME_POST } from "./constants";

const getPostState = state => {
  return state[FEATURE_NAME_POST];
};

export {
};
