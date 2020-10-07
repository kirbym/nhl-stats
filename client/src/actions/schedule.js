import axios from "axios";
import { GET_SCHEDULE } from "./types";

export const getGamesByDate = (dateString) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/schedule?date=${dateString}&expand=schedule.broadcasts&expand=schedule.linescore`
    );

    dispatch({
      type: GET_SCHEDULE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
