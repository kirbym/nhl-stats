import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
      <div data-toggle="collapse" data-target="#navbarContent.show">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarContent.show"
          >
            <Link className="nav-link" to="/teams">
              Teams
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarContent.show"
          >
            <Link className="nav-link" to="/players">
              Players
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarContent.show"
          >
            <Link className="nav-link" to="/standings">
              Standings
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarContent.show"
          >
            <Link className="nav-link" to="/schedule">
              Schedule
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
