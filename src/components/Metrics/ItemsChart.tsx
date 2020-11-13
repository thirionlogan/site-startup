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
const colors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
];

const data = {
  labels: dates,
  datasets: [
    {
      label: '# Items Created',
      data: randomChartData(dates.length),
      backgroundColor: colors[0],
      borderColor: colors[0],
      borderWidth: 1,
    },
    {
      label: '# Items Updated',
      data: randomChartData(dates.length),
      backgroundColor: colors[1],
      borderColor: colors[1],
      borderWidth: 1,
    },
    {
      label: '# Items Deleted',
      data: randomChartData(dates.length),
      backgroundColor: colors[2],
      borderColor: colors[2],
      borderWidth: 1,
    },
  ],
};

export default function ItemsChart() {
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
