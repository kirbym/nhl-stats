import { GET_ACTIVE_TEAMS } from '../actions/types';

const initialState = {
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTIVE_TEAMS:
      return {
        ...payload,
        loading: false
      };
    default:
      return state;
  }
}
