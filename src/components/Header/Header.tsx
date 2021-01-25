import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>CodiceFiscale</h1>
      <div className={classes.flags}>
        <img src="/assets/images/EU.png"></img>
        <img src="/assets/images/IT.png"></img>
      </div>
    </header>
  );
};

export default Header;
