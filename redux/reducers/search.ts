import { SEARCH_LOADED, SEARCH } from "../actionTypes";

const initialState = {
  results: null,
  page: 1,
  query: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      const { pageNumber, query } = action.payload;

      return {
        ...state,
        page: pageNumber,
        query
      };
    }
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
