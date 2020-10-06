import React from "react";
import PropTypes from "prop-types";

const PreGameFooter = ({ venue, broadcasts }) => {
  return (
    <div className="row no-gutters">
      <div className="col-5">{venue.name}</div>
      <div className="col-4 align-text-right">
        {broadcasts && broadcasts.length > 0 ? (
          broadcasts.map((bc) => (
            <p key={bc.id} className="remove-margin">
              {bc.name}{" "}
              <small className="text-muted">
                {bc.type.toString().toUpperCase()}
              </small>
            </p>
          ))
        ) : (
          <p>No broadcasts available</p>
        )}
      </div>
    </div>
  );
};

PreGameFooter.propTypes = {
  venue: PropTypes.object.isRequired,
  broadcasts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PreGameFooter;
