import { GET_GAMES } from '../actions/types';

const initialState = {
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GAMES:
      return {
        ...payload,
        loading: false
      };
    default:
      return state;
  }
}
