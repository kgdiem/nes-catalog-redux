import { GAME_LOADED } from "../actionTypes";

const initialState = {
  game: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GAME_LOADED: {
      return {
        ...state,
        game: action.payload.game
      };
    }
    default: {
      return state;
    }
  }
}
