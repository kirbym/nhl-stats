import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import { getTeamById } from "../../actions/teams";

const TeamDetail = ({ getTeamById, teams: { loading, selectedTeam } }) => {
  let { teamId } = useParams();

  useEffect(() => {
    getTeamById(teamId);
  }, [teamId, getTeamById]);

  return (
    <Fragment>
      {selectedTeam === null || selectedTeam === undefined || loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="row no-gutters">
            <div className="offset-md-1 col-md-10">
              <div className="row no-gutters">
                <div className="col-md-6" style={{ border: "1px solid red" }}>
                  name, record, points
                </div>
                <div className="col-md-6" style={{ border: "1px solid green" }}>
                  conference, division, venue
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-md-6" style={{ border: "1px solid black" }}>
                  previous game
                </div>
                {selectedTeam.nextGameSchedule && (
                  <div
                    className="col-md-6"
                    style={{ border: "1px solid blue" }}
                  >
                    next game
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="offset-md-1 col-md-10"
              style={{ border: "1px solid orange" }}
            >
              roster
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

TeamDetail.propTypes = {
  getTeamById: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ teams: state.teams });

export default connect(mapStateToProps, { getTeamById })(TeamDetail);
