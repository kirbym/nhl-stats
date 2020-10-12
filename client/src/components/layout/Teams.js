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
      {loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid" style={{ marginTop: "5vh" }}>
          <div className="row no-gutters">
            <div
              className="col-md-10 offset-md-1 col-sm-12"
              style={{ border: "1px blue solid" }}
            >
              {activeTeams.length > 0 && (
                <div className="row row-cols-md-4 row-cols-sm-1 row-cols-1">
                  {activeTeams.map((team) => (
                    <div
                      key={team.id}
                      className="col col-xs-12"
                      style={{
                        border: "1px black solid",
                      }}
                    >
                      <TeamCard team={team}/>
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
