import { SEARCH, LOAD_GAME, SEARCH_LOADED, GAME_LOADED } from "./actionTypes";

export const search = (query: string, pageNumber: string | number) => ({
  type: SEARCH,
  payload: {
    query,
    pageNumber
  }
});

export const loadGame = (id: string | number) => ({
  type: LOAD_GAME,
  payload: {
    id
  }
});

export const searchLoaded = results => ({
  type: SEARCH_LOADED,
  payload: { results }
});

export const gameLoaded = game => ({ type: GAME_LOADED, payload: { game } });
