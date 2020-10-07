import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { getGamesByDate } from "../../actions/schedule";
import { getActiveTeams } from "../../actions/teams";
import ListOfGames from "../games/ListOfGames";
import Spinner from "../common/Spinner";

const Landing = ({ getGamesByDate, getActiveTeams, schedule }) => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    // getGamesByDate(date.format("YYYY-MM-DD"));
    getGamesByDate("2020-08-12");
    getActiveTeams();
  }, [date, getGamesByDate, getActiveTeams]);

  return (
    <Fragment>
      {schedule.loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid" style={{ marginTop: "5vh" }}>
          <div className="row no-gutters">
            <div className="col" />
            <div className="col-md-8 col-sm-12">
              <div className="row no-gutters">
                <div className="col">
                  <button
                    onClick={() => {
                      setDate(moment(date.subtract(1, "days").toDate()));
                    }}
                  >
                    minus
                  </button>
                </div>
                <div className="col">{date.format("dddd, MMMM D")}</div>
                <div className="col">
                  <button
                    onClick={() => {
                      setDate(moment(date.add(1, "days").toDate()));
                    }}
                  >
                    plus
                  </button>
                </div>
              </div>
            </div>
            <div className="col" />
          </div>
          {schedule.dates.length > 0 ? (
            schedule.dates.map((gamesOnDay) => (
              <div key={gamesOnDay.date} className="row no-gutters">
                <div className="col" />
                <div key={gamesOnDay.date} className="col-md-8 col-sm-12">
                  <ListOfGames key={gamesOnDay.date} gamesData={gamesOnDay} />
                </div>
                <div className="col" />
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
