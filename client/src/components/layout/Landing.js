import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGamesByDate } from '../../actions/schedule';
import ListOfGames from '../games/ListOfGames';
import Spinner from '../common/Spinner';

const Landing = ({ getGamesByDate, schedule }) => {
  useEffect(() => {
    getGamesByDate();
    // getGamesByDate('2019-04-05', '2019-04-05');
  }, [getGamesByDate]);

  return (
    <Fragment>
      {schedule.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {schedule.dates.length > 0 ? (
            schedule.dates.map(gamesOnDay => (
              <ListOfGames key={gamesOnDay.date} gamesData={gamesOnDay} />
            ))
          ) : (
            <div className="text-center" style={{ marginTop: '15vh' }}>
              <span className="h5 pill-lg ice">No games today</span>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Landing.propTypes = {
  getGamesByDate: PropTypes.func.isRequired,
  schedule: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  schedule: state.schedule
});

export default connect(
  mapStateToProps,
  { getGamesByDate }
)(Landing);
