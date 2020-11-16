import { GET_ACTIVE_TEAMS, GET_TEAM_BY_ID } from "../actions/types";

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTIVE_TEAMS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case GET_TEAM_BY_ID:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
