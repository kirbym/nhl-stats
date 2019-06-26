import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TeamLogo = ({ teamId, teamName, size }) => {
  const logoSrc = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`;

  const logoClasses = classNames('img-fluid', size);

  return <img src={logoSrc} alt={teamName} className={logoClasses} />;
};

TeamLogo.propTypes = {
  teamId: PropTypes.number.isRequired
};

export default TeamLogo;
