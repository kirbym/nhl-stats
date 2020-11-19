import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import TeamLogo from "../logos/TeamLogo";
import { getTeamById } from "../../actions/teams";

const TeamDetail = ({ getTeamById, teams: { loading, selectedTeam } }) => {
  let { teamId } = useParams();

  useEffect(() => {
    getTeamById(teamId);
  }, [teamId, getTeamById]);

  return (
    <Fragment>
      {selectedTeam === null || selectedTeam === undefined || loading ? (
        <p>is loading</p>
      ) : (
        <Fragment>
          <div>TeamDetail {`${teamId}`}</div>
          <div>selected team {selectedTeam.name} </div>
        </Fragment>
      )}
    </Fragment>
  );
};

TeamDetail.propTypes = {
  getTeamById: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ teams: state.teams });

export default connect(mapStateToProps, { getTeamById })(TeamDetail);
