import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "../../store/reducers/allReducers";
import { getPosts, updatePost } from "../../store/actions/postAction";
import Post from "../../models/Post";

const store = createStore(allReducers, applyMiddleware(thunk));

beforeAll(() => {
  const post: Post = {
    id: 1,
    userId: 1,
    title: "test title",
    body: "test body",
  };
  store.dispatch(getPosts());
  store.dispatch(updatePost(post));
});

describe("Testing actions", () => {
  test("Testing Get Posts", async (done) => {
    store.subscribe(() => {
      expect(store.getState().postReducer.posts.length).toBeGreaterThan(0);
      done();
    });
  });

  test("Testing Update Post", async (done) => {
    store.subscribe(() => {
      expect(store.getState().postReducer.isUpdated).toEqual(true);
      done();
    });
  });

  test("Testing error", async (done) => {
    const post: Post = {
      id: 0,
      userId: 0,
      title: "",
      body: "",
    };
    store.dispatch(updatePost(post));
    store.subscribe(() => {
      expect(store.getState().postReducer.error.status).toEqual(500);
      done();
    });
  });
});
