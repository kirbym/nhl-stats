import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <ul>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/standings">Standings</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
