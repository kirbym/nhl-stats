import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TeamLogo from "../logos/TeamLogo";
import classNames from "classnames";
import { useParams } from "react-router-dom";

const TeamDetail = () => {
  let { teamId } = useParams();

  return (
    <Fragment>
      <div>TeamDetail {`${teamId}`}</div>
    </Fragment>
  );
};

TeamDetail.propTypes = {};

export default connect(null, null)(TeamDetail);
