import React from 'react';

import classes from './CodiceFiscale.module.scss';

const cfColors = ['#fff', '#32b843'];

const CodiceFiscale: React.FC<{ codiceFiscale: string; isReady: boolean }> = (props) => {
  const onClick = (e: any) => {
    const target = e.target as HTMLInputElement;
    target.select();
    document.execCommand('copy');
  };
  return (
    <div className={classes.container}>
      <input
        className={`${classes.input} ${props.isReady ? classes.is_ready : ''}`}
        type="text"
        onClick={onClick}
        defaultValue={props.codiceFiscale.toUpperCase()}
        readOnly
      />
      {props.isReady && <i className={classes.icon}>📋</i>}
    </div>
  );
};

export default CodiceFiscale;
