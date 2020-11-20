import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getActiveTeams } from "../../actions/teams";
import TeamCard from "../teams/TeamCard";

const Teams = ({ getActiveTeams, teams: { loading, activeTeams } }) => {
  useEffect(() => {
    getActiveTeams();
  }, [getActiveTeams]);

  return (
    <Fragment>
      {activeTeams === null || loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid" style={{ marginTop: "5vh" }}>
          <div className="row no-gutters">
            <div className="col">
              {activeTeams.length > 0 && (
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                  {activeTeams.map((team) => (
                    <div
                      key={team.id}
                      className="col"
                      style={{ marginBottom: "1em" }}
                    >
                      <TeamCard team={team} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Teams.propTypes = {
  getActiveTeams: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ teams: state.teams });

export default connect(mapStateToProps, { getActiveTeams })(Teams);
