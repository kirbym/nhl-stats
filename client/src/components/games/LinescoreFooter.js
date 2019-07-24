import React from 'react';
import PropTypes from 'prop-types';

const LinescoreFooter = ({
  linescore: { periods, teams },
  homeInfo,
  awayInfo
}) => {
  return (
    <div className="row">
      <div className="col-6">
        <table className="table table-striped table-sm table-responsive">
          <thead>
            <tr>
              <td>Goals</td>
              {periods.map(period => (
                <th scope="col">{period.ordinalNum}</th>
              ))}
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{homeInfo.abbreviation}</th>
              {periods.map(period => (
                <td>{period.home.goals}</td>
              ))}
              <td>{teams.home.goals}</td>
            </tr>
            <tr>
              <th scope="row">{awayInfo.abbreviation}</th>
              {periods.map(period => (
                <td>{period.away.goals}</td>
              ))}
              <td>{teams.away.goals}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-6">
        <table className="table table-striped table-sm table-responsive">
          <thead>
            <tr>
              <td>SOG</td>
              {periods.map(period => (
                <th scope="col">{period.ordinalNum}</th>
              ))}
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{homeInfo.abbreviation}</th>
              {periods.map(period => (
                <td>{period.home.shotsOnGoal}</td>
              ))}
              <td>{teams.home.shotsOnGoal}</td>
            </tr>
            <tr>
              <th scope="row">{awayInfo.abbreviation}</th>
              {periods.map(period => (
                <td>{period.away.shotsOnGoal}</td>
              ))}
              <td>{teams.away.shotsOnGoal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

LinescoreFooter.propTypes = {
  linescore: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
  away: PropTypes.object.isRequired
};

export default LinescoreFooter;
