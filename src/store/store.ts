import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(
  allReducers,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk))
);

export default store;
