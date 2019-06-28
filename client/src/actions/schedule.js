import axios from 'axios';
import { GET_SCHEDULE } from './types';

export const getGamesByDate = (
  startDate = new Date().toLocaleDateString(),
  endDate = new Date().toLocaleDateString()
) => async dispatch => {
  try {
    const res = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${startDate}&endDate=${endDate}&expand=schedule.broadcasts&expand=schedule.linescore`
    );

    dispatch({
      type: GET_SCHEDULE,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};
