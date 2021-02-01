import { createStore, applyMiddleware } from "redux";
import { loadGameMiddleware, searchMiddleware } from "./middleware";
import reducer from "./reducers";

export default createStore(
  reducer,
  applyMiddleware(loadGameMiddleware, searchMiddleware)
);
