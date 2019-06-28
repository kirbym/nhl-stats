import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TeamRow from './TeamRow';
import PreGameFooter from './PreGameFooter';
import LinescoreFooter from './LinescoreFooter';

const GameCard = ({
  gameData: {
    gamePk,
    teams: { home, away },
    venue,
    status: { detailedState },
    gameDate,
    broadcasts,
    linescore
  },
  teams: { activeTeams }
}) => {
  const [footer, toggleFooter] = useState(false);

  return (
    <div className="card" style={{ marginBottom: '2vh' }}>
      <div
        className="card-body"
        onClick={() => {
          toggleFooter(!footer);
        }}
      >
        <div className="row no-gutters">
          <div className="col-10">
            <TeamRow teamData={home} detailedState={detailedState} />
            <hr style={{ borderWidth: '2px', backgroundColor: 'darkgray' }} />
            <TeamRow teamData={away} detailedState={detailedState} />
          </div>
          <div className="col-2 h6 center-elem">{detailedState}</div>
        </div>
      </div>
      {footer && (
        <div className="card-footer">
          {detailedState === 'Scheduled' ? (
            <PreGameFooter
              venue={venue}
              startTime={gameDate}
              broadcasts={broadcasts}
            />
          ) : (
            <LinescoreFooter />
          )}
        </div>
      )}
    </div>
  );
};

GameCard.propTypes = {
  gameData: PropTypes.object.isRequired,
  teams: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  teams: state.teams
});

export default connect(
  mapStateToProps,
  null
)(GameCard);
