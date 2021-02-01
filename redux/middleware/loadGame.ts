import { LOAD_GAME } from "../actionTypes";
import { API } from "../../lib";
import { gameLoaded } from "../actions";

export const loadGameMiddleware = store => next => action => {
  if (action.type === LOAD_GAME) {
    API.getGame(action.payload.id).then(game => {
      store.dispatch(gameLoaded(game));
    });
  }

  return next(action);
};
