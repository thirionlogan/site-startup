import React from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles, Paper } from '@material-ui/core';
import { getDaysArray, randomChartData } from './MetricsUtils';

const useStyles = makeStyles({
  paper: {
    marginTop: 32,
    padding: 16,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
});

const dates = getDaysArray(new Date('1-1-2020'), new Date('2-1-2020'));

const data = {
  labels: dates,
  datasets: [
    {
      label: '# of Feedback Submissions',
      data: randomChartData(dates.length),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export default function FeedbackChart() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Line
        data={data}
        width={500}
        height={250}
        options={{ maintainAspectRatio: false }}
      />
    </Paper>
  );
}
