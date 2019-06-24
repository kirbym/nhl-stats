import axios from 'axios';
import { GET_GAMES } from './types';

export const getGamesByDate = (
  startDate = new Date().toLocaleDateString(),
  endDate = new Date().toLocaleDateString()
) => async dispatch => {
  try {
    const res = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${startDate}&endDate=${endDate}`
    );

    dispatch({
      type: GET_GAMES,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
