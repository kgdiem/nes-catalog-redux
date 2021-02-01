import { SEARCH } from "../actionTypes";
import { API } from "../../lib";
import { searchLoaded } from "../actions";

export const searchMiddleware = store => next => action => {
  if (action.type === SEARCH) {
    API.getList(action.payload.query, action.payload.page).then(results => {
      store.dispatch(searchLoaded(results));
    });
  }

  return next(action);
};
