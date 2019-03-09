import React from 'react';
import { configure, shallow } from 'enzyme';
import Adpater from 'enzyme-adapter-react-16';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adpater() });
describe('CarouselButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<CarouselButton />);
    expect(wrapper.type()).toBe('button');
  });
});
