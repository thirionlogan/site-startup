import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Overlay from './Overlay';

describe('<Overlay />', () => {
  it('shallow', () => {
    const component = shallow(<Overlay />);
    expect(1).toEqual(1);
  });
});
