import React from "react";
import PropTypes from "prop-types";
import TeamLogo from "../logos/TeamLogo";

const TeamRow = ({
  teamData: { team, leagueRecord, score },
  detailedState,
}) => {
  const record =
    leagueRecord.wins.toString() +
    "-" +
    leagueRecord.losses.toString() +
    "-" +
    leagueRecord.ot.toString();

  return (
    <div className="row no-gutters">
      <div className="col-4">
        <TeamLogo teamId={team.id} teamName={team.name} size="logo-small" />
      </div>
      <div className="col-6">
        <p className="d-inline">{team.name} </p>
        <p>
          <small className="d-inline text-muted">{record}</small>
        </p>
      </div>
      <div className="col-2">
        {detailedState !== "Scheduled" && (
          <span className="score h5 align-text-center">{score}</span>
        )}
      </div>
    </div>
  );
};

TeamRow.propTypes = {
  teamData: PropTypes.object.isRequired,
  detailedState: PropTypes.string.isRequired,
};

export default TeamRow;
