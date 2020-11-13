import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Item } from '../../../server/api/Items/item.interface';

const useStyles = makeStyles({
  root: {
    marginBottom: 32,
    marginRight: 16,
    marginLeft: 16,
    maxWidth: 345,
  },
});

type Props = {
  item: Item;
};

export default function ItemCard(props: Props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Price: $${item.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
