import axios from "axios";
import { GET_ACTIVE_TEAMS } from "./types";

export const getActiveTeams = () => async (dispatch) => {
  try {
    const res = await axios.get("https://statsapi.web.nhl.com/api/v1/teams/");

    dispatch({
      type: GET_ACTIVE_TEAMS,
      payload: {
        activeTeams: res.data.teams,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
