import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const ListOfGames = ({ gamesData: { games } }) => {
  return (
    <Fragment>
      {games.length > 0 &&
        games.map(game => <Game key={game.gamePk} gameData={game} />)}
    </Fragment>
  );
};

ListOfGames.propTypes = {
  gamesData: PropTypes.object.isRequired
};

export default ListOfGames;
