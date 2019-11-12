import { combineReducers } from "redux";
import busketReducer from "./bucketReducer";

export default combineReducers({
  bucket: busketReducer
});
