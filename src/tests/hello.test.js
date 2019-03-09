import React from 'react';

describe('JSX', () => {
  it('Calls React.createElement', () => {
    const createElementSpy = jest.spyOn(React, 'createElement');
    <ul>Hello, JSX!</ul>;
    expect(createElementSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX!');
  });
});
