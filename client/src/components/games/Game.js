import React from 'react';
import PropTypes from 'prop-types';
import TeamLogo from '../logos/TeamLogo';

const Game = ({
  gameData: {
    gamePk,
    teams: { home, away },
    venue,
    status: { detailedState }
  }
}) => {
  const homeRecord =
    home.leagueRecord.wins.toString() +
    '-' +
    home.leagueRecord.losses.toString() +
    '-' +
    home.leagueRecord.ot.toString();

  const awayRecord =
    away.leagueRecord.wins.toString() +
    '-' +
    away.leagueRecord.losses.toString() +
    '-' +
    away.leagueRecord.ot.toString();

  return (
    <div className="card">
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-10">
            <div className="row no-gutters">
              <div className="col-4">
                <TeamLogo
                  teamId={home.team.id}
                  teamName={home.team.name}
                  size="small"
                />
              </div>
              <div className="col-7">
                <p className="d-inline">{home.team.name} </p>
                <p>
                  <small className="d-inline text-muted">{homeRecord}</small>
                </p>
              </div>
              <div className="col-1">
                {detailedState !== 'Scheduled' && (
                  <span className="score h5 center-elem">{home.score}</span>
                )}
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-4">
                <TeamLogo
                  teamId={away.team.id}
                  teamName={away.team.name}
                  size="small"
                />
              </div>
              <div className="col-7">
                <p className="d-inline">{away.team.name}</p>
                <p>
                  <small className="d-inline text-muted">{awayRecord}</small>
                </p>
              </div>
              <div className="col-1">
                {detailedState !== 'Scheduled' && (
                  <span className="score h5 center-elem">{away.score}</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-2 h6 center-elem">{detailedState}</div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row no-gutters">
          <div className="col-12">venue, start time, broadcast</div>
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  gameData: PropTypes.object.isRequired
};

export default Game;
