import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Home</Typography>
    </div>
  );
}
