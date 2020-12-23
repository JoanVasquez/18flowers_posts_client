import { combineReducers } from "redux";
import postReducer from "./posts/postReducer";
import paginationReducer from "./pagination/paginationReducer";

export default combineReducers({
  postReducer,
  paginationReducer,
});
