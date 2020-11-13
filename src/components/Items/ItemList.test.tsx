import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ItemList from './ItemList';
import { Items } from '../../../server/api/Items/items.interface';
import { getItems } from '../Client';
import ItemCard from './ItemCard';

const items: Items = {
  1: {
    id: 1,
    name: 'Red Stapler',
    price: 5.99,
    description: 'This is a stapler that is red',
    image: 'https://m.media-amazon.com/images/I/51Hu1XKegmL.jpg',
  },
  2: {
    id: 3,
    name: 'Green Stapler',
    price: 6.99,
    description: 'This is a stapler that is Green',
    image: 'https://m.media-amazon.com/images/I/51Hu1XKegmL.jpg',
  },
  3: {
    id: 3,
    name: 'Blue Stapler',
    price: 7.99,
    description: 'This is a stapler that is Blue',
    image: 'https://m.media-amazon.com/images/I/51Hu1XKegmL.jpg',
  },
};

describe('<ItemList />;', () => {
  let component: ShallowWrapper;
  const mockGetItems = getItems as jest.Mock;

  beforeEach(() => {
    mockGetItems.mockReset();
    mockGetItems.mockReturnValue(Promise.resolve(items));

    component = shallow(<ItemList />);
    console.debug(component.debug());
  });

  it('should containt all ItemCards', () => {
    expect(component.exists(ItemCard)).toEqual(true);
    expect(component.exists(ItemCard)).toEqual(true);
    expect(component.exists(ItemCard)).toEqual(true);
  });
});
