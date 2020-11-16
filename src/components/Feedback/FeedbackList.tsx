import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Feedback } from '../../../server/api/Feedback/feedback.interface';
import FeedbackCard from './FeedbackCard';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    maxWidth: '90%',
    minWidth: 345,
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
});

export default function FeedbackList() {
  const classes = useStyles();
  const [feedback, setFeedback] = React.useState<Feedback[]>([]);

  useEffect(() => {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((resFeedback: Feedback[]) => setFeedback(resFeedback));
  });

  return (
    <div className={classes.root}>
      <h1>List of Feedback</h1>
      {feedback.length ? (
        <div className={classes.list}>
          {feedback.map((feedbackCard: Feedback) => {
            return (
              <FeedbackCard key={feedbackCard.id} feedback={feedbackCard} />
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No List Feedback Found</h2>
        </div>
      )}
    </div>
  );
}
