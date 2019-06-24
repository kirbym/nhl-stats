import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Game = ({
  gameData: {
    gamePk,
    teams: { home, away },
    venue,
    status: { detailedState }
  }
}) => {
  return (
    <Fragment>
      <p>Game ID: {gamePk}</p>
      <p>Home Team: {home.team.name}</p>
      <p>Away Team: {away.team.name}</p>
      <p>Venue: {venue.name}</p>
      <p>State: {detailedState}</p>
    </Fragment>
  );
};

Game.propTypes = {
  gameData: PropTypes.object.isRequired
};

export default Game;
