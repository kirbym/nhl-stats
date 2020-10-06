import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGamesByDate } from "../../actions/schedule";
import { getActiveTeams } from "../../actions/teams";
import ListOfGames from "../games/ListOfGames";
import Spinner from "../common/Spinner";

const Landing = ({ getGamesByDate, getActiveTeams, schedule }) => {
  useEffect(() => {
    // getGamesByDate();
    getGamesByDate("2020-08-11", "2020-08-11");
    getActiveTeams();
  }, [getGamesByDate, getActiveTeams]);

  return (
    <Fragment>
      {schedule.loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid" style={{ marginTop: "5vh" }}>
          {schedule.dates.length > 0 ? (
            schedule.dates.map((gamesOnDay) => (
              <div key={gamesOnDay.date} className="row no-gutters">
                <div key={gamesOnDay.date} className="col-12">
                  <ListOfGames key={gamesOnDay.date} gamesData={gamesOnDay} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center" style={{ marginTop: "15vh" }}>
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
  getActiveTeams: PropTypes.func.isRequired,
  schedule: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  schedule: state.schedule,
});

export default connect(mapStateToProps, { getGamesByDate, getActiveTeams })(
  Landing
);
