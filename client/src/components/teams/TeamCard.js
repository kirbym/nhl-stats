import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TeamLogo from "../logos/TeamLogo";

const TeamCard = ({ team: { id, name, abbreviation } }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="row no-gutters">
            <div className="col-3">
              <TeamLogo teamId={id} teamName={name} size="logo-sm" />
            </div>
            <div className="col-9">
              <div className="center-y">
                <span className="h5">{name}</span>{" "}
                <span
                  className="font-italic text-muted"
                  style={{ fontSize: "14px" }}
                >
                  {abbreviation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

TeamCard.propTypes = {
  team: PropTypes.object.isRequired,
};

export default connect(null, null)(TeamCard);
