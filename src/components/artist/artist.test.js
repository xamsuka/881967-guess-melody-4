import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './artist.jsx';

test(`<Artist /> render`, () => {
  const three = renderer
    .create(<Artist />).toJSON();

  expect(three).toMatchSnapshot();
});
