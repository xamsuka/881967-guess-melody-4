import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

test(`Render App`, () => {
  const three = renderer
    .create(
        <App errorsCount = {3} />
    ).toJSON();

  expect(three).toMatchSnapshot();
});
