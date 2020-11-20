import { GET_SCHEDULE } from "../actions/types";

const initialState = {
  totalGames: null,
  dates: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SCHEDULE:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
