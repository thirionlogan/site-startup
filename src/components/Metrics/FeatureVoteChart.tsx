import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    marginTop: 32,
    padding: 16,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
});

const data = {
  labels: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5',
    'Feature 6',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function FeatureVoteChart() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Bar
        data={data}
        width={500}
        height={250}
        options={{ maintainAspectRatio: false }}
      />
    </Paper>
  );
}
