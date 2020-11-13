import { shallow } from 'enzyme';
import React from 'react';
import ItemCard from './ItemCard';
import { Item } from '../../../server/api/Items/item.interface';

const item: Item = {
  id: 1,
  name: 'Red Stapler',
  price: 5.99,
  description: 'This is a stapler that is red',
  image: 'https://m.media-amazon.com/images/I/51Hu1XKegmL.jpg',
};

describe('<ItemCard />;', () => {
  describe('When it renders', () => {
    const component = shallow(<ItemCard item={item} />);

    it('should contain all of the data', async () => {
      expect(component.contains('Red Stapler')).toEqual(true);
      expect(component.contains('Price: $5.99')).toEqual(true);
      expect(component.contains('This is a stapler that is red')).toEqual(true);
    });
  });
});
