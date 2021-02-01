import { SEARCH_LOADED } from "../actionTypes";

const initialState = {
  results: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOADED: {
      return {
        ...state,
        results: action.payload.results
      };
    }
    default: {
      return state;
    }
  }
}
