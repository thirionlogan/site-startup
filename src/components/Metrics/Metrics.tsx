import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PageNavigationsChart from './PageNavigationsChart';
import ItemsChart from './ItemsChart';
import FeedbackChart from './FeedbackChart';
import FeatureVoteChart from './FeatureVoteChart';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    marginTop: 32,
    padding: 16,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
});

export default function Metrics() {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4">Metrics</Typography>
      <FeatureVoteChart />
      <PageNavigationsChart />
      <ItemsChart />
      <FeedbackChart />
    </div>
  );
}
