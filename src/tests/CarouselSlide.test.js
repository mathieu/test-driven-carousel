import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
  let wrapper;
  const imgUrl = 'https://example.com/image.png';

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide imgUrl={imgUrl} description="default description" />
    );
  });

  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure');
  });

  it('renders an <img> and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe('img');
    expect(wrapper.childAt(1).type()).toBe('figcaption');
  });

  it('passes `imgUrl` through to the <img>', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(imgUrl);
  });

  it('uses `description` and attribution` as the figcaption', () => {
    const description = 'A jaw-droppinglt spectacular image';
    const attribution = 'Trevor Burnham';
    wrapper.setProps({ description, attribution });
    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find('figcaption strong').text()).toBe(description);
  });

  it('passes extra props to the <figure>', () => {
    const className = 'myFigure';
    const style = {};
    const onClick = {};
    wrapper.setProps({ className, style, onClick });
    expect(wrapper.prop('className')).toBe(className);
    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
  });
});
