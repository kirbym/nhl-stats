import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TeamLogo from "../logos/TeamLogo";

const TeamCard = ({team : {id, name}}) => {
  return <Fragment><TeamLogo teamId={id} teamName={name} size="logo-xs" /></Fragment>;
};

TeamCard.propTypes = {
  team: PropTypes.object.isRequired
};

export default connect(null, null)(TeamCard);
