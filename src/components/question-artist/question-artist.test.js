import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtistScreen from './question-artist';

test(`<QuestionArtist /> render`, () => {
  const three = renderer
    .create(<QuestionArtistScreen />).toJSON();

  expect(three).toMatchSnapshot();
});
