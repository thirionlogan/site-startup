/**
 * Data Model Interfaces
 */

import faker from 'faker';
import { Item } from './item.interface';
import { Items } from './items.interface';

/**
 * In-Memory Store
 */

// TODO replace with db

const generateItems = (): Items => {
  // eslint-disable-next-line prefer-const
  let generatedItems: Items = {};

  for (let i = 1; i < 51; i++) {
    generatedItems[i] = {
      id: i,
      name: faker.name.findName(),
      price: parseInt(faker.commerce.price(), 10),
      description: faker.lorem.paragraph(),
      image: faker.image.cats(),
    };
  }

  return generatedItems;
};
const items: Items = generateItems();
// const items: Items = {
//   1: {
//     id: 1,
//     name: 'Burger',
//     price: 5.99,
//     description: 'Tasty',
//     image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
//   },
//   2: {
//     id: 2,
//     name: 'Pizza',
//     price: 2.99,
//     description: 'Cheesy',
//     image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
//   },
//   3: {
//     id: 3,
//     name: 'Tea',
//     price: 1.99,
//     description: 'Informative',
//     image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
//   },
//   4: {
//     id: 4,
//     name: 'Burger',
//     price: 5.99,
//     description: 'Tasty',
//     image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
//   },
//   5: {
//     id: 5,
//     name: 'Pizza',
//     price: 2.99,
//     description: 'Cheesy',
//     image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
//   },
//   6: {
//     id: 6,
//     name: 'Tea',
//     price: 1.99,
//     description: 'Informative',
//     image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
//   },
//   7: {
//     id: 7,
//     name: 'Burger',
//     price: 5.99,
//     description: 'Tasty',
//     image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
//   },
//   8: {
//     id: 8,
//     name: 'Pizza',
//     price: 2.99,
//     description: 'Cheesy',
//     image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
//   },
//   9: {
//     id: 9,
//     name: 'Tea',
//     price: 1.99,
//     description: 'Informative',
//     image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
//   },
//   10: {
//     id: 10,
//     name: 'Burger',
//     price: 5.99,
//     description: 'Tasty',
//     image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
//   },
//   11: {
//     id: 11,
//     name: 'Pizza',
//     price: 2.99,
//     description: 'Cheesy',
//     image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
//   },
//   12: {
//     id: 12,
//     name: 'Tea',
//     price: 1.99,
//     description: 'Informative',
//     image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
//   },
// };

/**
 * Service Methods
 */

export const findAll = async (): Promise<Items> => {
  return items;
};

export const find = async (id: number): Promise<Item> => {
  const record: Item = items[id];

  if (record) {
    return record;
  }

  throw new Error('No record found');
};

export const create = async (newItem: Item): Promise<void> => {
  const id = new Date().valueOf();
  items[id] = {
    ...newItem,
    id,
  };
};

export const update = async (updatedItem: Item): Promise<void> => {
  if (items[updatedItem.id]) {
    items[updatedItem.id] = updatedItem;
    return;
  }

  throw new Error('No record found to update');
};

export const remove = async (id: number): Promise<void> => {
  const record: Item = items[id];

  if (record) {
    delete items[id];
    return;
  }

  throw new Error('No record found to delete');
};
