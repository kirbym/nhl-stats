import { GET_SCHEDULE } from "../actions/types";

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SCHEDULE:
      return {
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
