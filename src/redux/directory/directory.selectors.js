import { createSelector } from "reselect";
import { createStore } from "redux";
import Directory from "../../components/directory/directory.component";

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
