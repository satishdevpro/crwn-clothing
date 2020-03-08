import { createSelector } from "reselect";
import { useReducer } from "react";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
