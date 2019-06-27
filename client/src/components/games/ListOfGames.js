import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const ListOfGames = ({ gamesData: { games } }) => {
  return (
    <Fragment>
      {games.length > 0 &&
        games.map(game => <GameCard key={game.gamePk} gameData={game} />)}
    </Fragment>
  );
};

ListOfGames.propTypes = {
  gamesData: PropTypes.object.isRequired
};

export default ListOfGames;
