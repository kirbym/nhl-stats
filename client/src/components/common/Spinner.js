import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading" className="img-center img-fluid" />
    </Fragment>
  );
};

export default Spinner;
