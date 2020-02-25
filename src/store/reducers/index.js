import { combineReducers } from "redux";
import applicants from "./applicants";
import settings from "./settings";
export default combineReducers({
  applicants,
  settings
});
