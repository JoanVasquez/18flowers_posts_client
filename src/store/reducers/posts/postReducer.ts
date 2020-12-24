import Post from "../../../models/Post";
import reducerCreator from "../../../utils/reducerCreator";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  LOADING_POST,
  UPDATE_POST,
} from "../../actions/postActionType";

type StateModel = {
  isLoading: boolean;
  posts: Array<Post>;
  isUpdated: boolean;
  error: any;
};

const initialState: StateModel = {
  isLoading: false,
  posts: [],
  isUpdated: false,
  error: {},
};

const postReducer: any = {
  [GET_POSTS]: (state: StateModel, action: any) => {
    return {
      ...state,
      posts: action.payload,
    };
  },
  [UPDATE_POST]: (state: StateModel, action: any) => {
    const index = state.posts.findIndex(
      (item) => item.id === action.payload.result.id
    );
    const posts: Array<Post> = [...state.posts];
    posts[index] = action.payload.result;
    return {
      ...state,
      isUpdated: action.payload.success,
      posts,
    };
  },
  [LOADING_POST]: (state: StateModel, action: any) => {
    return {
      ...state,
      isLoading: action.payload,
    };
  },
  [GET_POSTS_ERROR]: (state: StateModel, action: any) => {
    return {
      ...state,
      error: action.payload,
    };
  },
};

export default reducerCreator(initialState, postReducer);
