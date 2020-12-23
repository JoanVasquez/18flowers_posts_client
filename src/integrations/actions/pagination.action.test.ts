import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "../../store/reducers/allReducers";
import {
  setPagination,
  resetPagination,
} from "../../store/actions/paginationAction";

const store = createStore(allReducers, applyMiddleware(thunk));

beforeAll(() => {
  const arr: Array<number> = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  store.dispatch(setPagination(1, arr));
  store.dispatch(resetPagination());
});

describe("Testing Pagination Action", () => {
  test("Testing set pagination", async () => {
    store.subscribe(() => {
      expect(
        store.getState().paginationReducer.paginatedData.length
      ).toBeGreaterThan(0);
    });
  });

  test("Testing reset pagination", () => {
    store.subscribe(() => {
      expect(store.getState().paginationReducer.paginatedData.length).toEqual(
        0
      );
    });
  });
});
