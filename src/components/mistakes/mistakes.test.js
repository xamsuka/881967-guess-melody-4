import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

test(`Mistakes component render`, () => {
  const three = renderer
    .create(<Mistakes countMistakes = {3} />).toJSON();

  expect(three).toMatchSnapshot(1);
});
