import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGamesByDate } from '../../actions/schedule';
import ListOfGames from '../games/ListOfGames';
import Spinner from '../common/Spinner';

const Landing = ({ getGamesByDate, schedule }) => {
  useEffect(() => {
    // getGamesByDate();
    getGamesByDate('2019-04-05', '2019-04-05');
  }, [getGamesByDate]);

  return (
    <Fragment>
      {schedule.loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid" style={{ marginTop: '5vh' }}>
          {schedule.dates.length > 0 ? (
            schedule.dates.map(gamesOnDay => (
              <div className="row no-gutters">
                <div className="col-12">
                  <ListOfGames key={gamesOnDay.date} gamesData={gamesOnDay} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center" style={{ marginTop: '15vh' }}>
              <span className="h5 pill-lg ice">No games today</span>
            </div>
          )}
        </div>
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
