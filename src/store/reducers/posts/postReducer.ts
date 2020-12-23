import reducerCreator from "../../../utils/reducerCreator";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  UPDATE_POST,
} from "../../actions/postActionType";

const initialState: any = {
  isLoading: false,
  posts: [],
  isUpdated: false,
  error: {},
};

const postReducer: any = {
  [GET_POSTS]: (state: any, action: any) => {
    return {
      ...state,
      posts: action.payload,
    };
  },
  [UPDATE_POST]: (state: any, action: any) => {
    return {
      ...state,
      isUpdated: action.payload,
    };
  },
  [GET_POSTS_ERROR]: (state: any, action: any) => {
    return {
      ...state,
      error: action.payload,
    };
  },
};

export default reducerCreator(initialState, postReducer);
