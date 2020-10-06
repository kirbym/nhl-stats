import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { convertToGameTime } from "../../utils/convertToGameTime";

const DetailedState = ({
  detailedState,
  linescore: {
    currentPeriodOrdinal,
    currentPeriodTimeRemaining,
    intermissionInfo: { inIntermission, intermissionTimeRemaining },
  },
  startTime,
}) => {
  const gameScheduled = <h6>{moment(startTime).format("LT")}</h6>;

  const gameFinal = (
    <h6>
      Final
      {(currentPeriodOrdinal.includes("OT") ||
        currentPeriodOrdinal.includes("SO")) && (
        <span> / {currentPeriodOrdinal}</span>
      )}
    </h6>
  );

  const gameInProgress = (
    <h6>
      {inIntermission ? (
        <span>
          INT <br /> {convertToGameTime(intermissionTimeRemaining)}
        </span>
      ) : (
        <span>
          {currentPeriodOrdinal} <br />
          {currentPeriodTimeRemaining !== "Final" && (
            <span>{convertToGameTime(currentPeriodTimeRemaining)}</span>
          )}
        </span>
      )}
    </h6>
  );

  return (
    <div className="row no-gutters">
      <div className="col align-text-center">
        {detailedState === "Scheduled" && gameScheduled}
        {detailedState === "Final" && gameFinal}
        {detailedState !== "Scheduled" &&
          detailedState !== "Final" &&
          gameInProgress}
      </div>
    </div>
  );
};

DetailedState.propTypes = {
  detailedState: PropTypes.string.isRequired,
  linescore: PropTypes.object.isRequired,
  startTime: PropTypes.string.isRequired,
};

export default DetailedState;
