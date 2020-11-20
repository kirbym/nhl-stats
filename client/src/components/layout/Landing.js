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
    getGamesByDate(date.format("YYYY-MM-DD"));
    getActiveTeams();
  }, [date, getGamesByDate, getActiveTeams]);

  return (
    <Fragment>
      {schedule.loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid" style={{ marginTop: "5vh" }}>
          <div className="row no-gutters" style={{ marginBottom: "2vh" }}>
            <div className="col-md-8 offset-md-2 col-sm-12">
              <ul className="list-group list-group-horizontal bg-dark">
                <li className="list-group-item py-0 px-0 bg-dark">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      setDate(moment(date.subtract(1, "days").toDate()));
                    }}
                  >
                    <i className="fas fa-angle-double-left fa-lg"></i>
                  </button>
                </li>
                <li
                  className="list-group-item py-0 bg-dark text-light align-text-center"
                  style={{ width: "100%" }}
                >
                  <div>
                    <span style={{ fontSize: "1.5em" }}>
                      {date.format("dddd, MMMM D")}
                    </span>
                    {schedule.totalGames !== null && (
                      <span
                        className="badge badge-light center-y"
                        style={{ fontSize: ".9em", marginLeft: ".8em" }}
                      >
                        {schedule.totalGames}
                      </span>
                    )}
                  </div>
                </li>
                <li className="list-group-item py-0 px-0 bg-dark">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      setDate(moment(date.add(1, "days").toDate()));
                    }}
                  >
                    <i className="fas fa-angle-double-right fa-lg"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {schedule.dates !== null && schedule.dates.length > 0 ? (
            schedule.dates.map((gamesOnDay) => (
              <div key={gamesOnDay.date} className="row no-gutters">
                <div
                  key={gamesOnDay.date}
                  className="col-md-8 offset-md-2 col-sm-12"
                >
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
