import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Feedback } from '../../../server/api/Feedback/feedback.interface';

const useStyles = makeStyles({
  root: {
    marginBottom: 32,
    marginRight: 16,
    marginLeft: 16,
    maxWidth: 345,
  },
});

type Props = {
  feedback: Feedback;
};

export default function FeedbackCard(props: Props) {
  const classes = useStyles();
  const { feedback } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {feedback.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
