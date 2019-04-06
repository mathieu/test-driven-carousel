import React from 'react';
import { shallow, mount } from 'enzyme';
import CarouselSlide from '../CarouselSlide';
import styled from 'styled-components';

describe('CarouselSlide', () => {
  let wrapper;
  const imgUrl = 'https://example.com/image.png';

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide imgUrl={imgUrl} description="default description" />
    );
  });

  it('renders correctly', () => {
    wrapper.setProps({
      description: 'Decription',
      attribute: 'Attribute',
    });
    expect(wrapper).toMatchSnapshot();
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

describe('Img', () => {
  let mounted;
  const imgUrl = 'https://example.com/image.png';

  beforeEach(() => {
    mounted = mount(
      <CarouselSlide.defaultProps.Img src={imgUrl} imgHeight={500} />
    );
  });

  it('renders correctly', () => {
    expect(mounted.find('img')).toMatchSnapshot();
  });

  it('uses imgHeight as the height style property', () => {
    expect(mounted).toHaveStyleRule('height', '500px');
    mounted.setProps({ imgHeight: 'calc(100vh-100px)' });
    expect(mounted).toHaveStyleRule('height', 'calc(100vh-100px)');
  });
});
