import axios from "axios";
import { GET_ACTIVE_TEAMS, GET_TEAM_BY_ID } from "./types";

export const getActiveTeams = () => async (dispatch) => {
  try {
    const res = await axios.get("https://statsapi.web.nhl.com/api/v1/teams");

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

export const getTeamById = (id) => async (dispatch) => {
  const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}
    ?expand=team.roster&expand=team.schedule.previous&expand=team.schedule.next`;

  try {
    const res = await axios.get(url);

    dispatch({
      type: GET_TEAM_BY_ID,
      payload: {
        selectedTeam: res.data.teams[0],
      },
    });
  } catch (err) {
    console.error(err);
  }
};
