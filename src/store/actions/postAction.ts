import { Dispatch } from "redux";
import Post from "../../models/Post";
import PostService from "../../services/PostService";
import actionCreator from "../../utils/actionCreator";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  LOADING_POST,
  UPDATE_POST,
} from "./postActionType";

const postService: PostService = new PostService();

export const getPosts = (): any => {
  return (dispatch: Dispatch) => {
    dispatch(actionCreator(LOADING_POST, "payload")(true));
    postService
      .list()
      .then((data: any) => {
        dispatch(actionCreator(GET_POSTS, "payload")(data.result));
        dispatch(actionCreator(LOADING_POST, "payload")(false));
      })
      .catch((ex) => {
        dispatch(actionCreator(GET_POSTS_ERROR, "payload")(ex));
        dispatch(actionCreator(LOADING_POST, "payload")(false));
      });
  };
};

export const updatePost = (post: Post): any => {
  return (dispatch: Dispatch) => {
    dispatch(actionCreator(LOADING_POST, "payload")(true));
    postService
      .update(post)
      .then((data: any) => {
        dispatch(actionCreator(UPDATE_POST, "payload")(data));
        dispatch(actionCreator(LOADING_POST, "payload")(false));
      })
      .catch((ex) => {
        dispatch(actionCreator(GET_POSTS_ERROR, "payload")(ex));
        dispatch(actionCreator(LOADING_POST, "payload")(false));
      });
  };
};
