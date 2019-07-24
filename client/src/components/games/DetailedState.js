import React from 'react';
import PropTypes from 'prop-types';

const DetailedState = ({
  detailedState,
  linescore: {
    currentPeriodOrdinal,
    currentPeriodTimeRemaining,
    intermissionInfo: { inIntermission, intermissionTimeRemaining }
  }
}) => {
  const gameScheduled = <h6>Scheduled</h6>;
  const gameFinal = (
    <h6>
      Final
      <br />{' '}
      {(currentPeriodOrdinal === 'OT' || currentPeriodOrdinal === 'SO') && (
        <span>{currentPeriodOrdinal}</span>
      )}
    </h6>
  );

  const gameInProgress = (
    <h6>
      {inIntermission ? (
        <span>
          INT <br /> {intermissionTimeRemaining}
        </span>
      ) : (
        <span>
          {currentPeriodOrdinal} <br />{' '}
          {currentPeriodTimeRemaining !== 'Final' && (
            <span>{currentPeriodTimeRemaining}</span>
          )}
        </span>
      )}
    </h6>
  );

  return (
    <div>
      {detailedState === 'Scheduled' && gameScheduled}
      {detailedState === 'Final' && gameFinal}
      {detailedState !== 'Scheduled' &&
        detailedState !== 'Final' &&
        gameInProgress}
    </div>
  );
};

DetailedState.propTypes = {
  detailedState: PropTypes.string.isRequired,
  linescore: PropTypes.object.isRequired
};

export default DetailedState;
