import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGamesByDate } from '../../actions/schedule';
import Games from '../games/Games';

const Landing = ({ getGamesByDate, schedule }) => {
  useEffect(() => {
    getGamesByDate('2019-04-05', '2019-04-05');
  }, [getGamesByDate]);

  return (
    <Fragment>
      Total Games {schedule.totalGames}
      {schedule.loading || schedule.dates === undefined ? (
        <p>loading or undefined</p>
      ) : (
        <Fragment>
          {schedule.dates.length > 0 &&
            schedule.dates.map(date => (
              <Games key={Date.now()} gamesData={date} />
            ))}
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
