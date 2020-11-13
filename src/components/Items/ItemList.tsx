import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './ItemCard';
import { Items } from '../../../server/api/Items/items.interface';
import { Item } from '../../../server/api/Items/item.interface';
import { getItems } from '../Client';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    maxWidth: '90%',
    minWidth: 345,
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
});

export default function ItemList() {
  const classes = useStyles();
  const [items, setItems] = React.useState<Items>({});

  useEffect(() => {
    getItems().then((resItems: Items) => setItems(resItems));
  });

  return (
    <div className={classes.root}>
      <h1>List of Items</h1>
      {Object.entries(items).length ? (
        <div className={classes.list}>
          {Object.entries(items)
            .map((keyValuePair) => {
              return keyValuePair[1];
            })
            .map((item: Item) => {
              return <ItemCard key={item.id} item={item} />;
            })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )}
    </div>
  );
}
