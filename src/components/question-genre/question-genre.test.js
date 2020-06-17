import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreScreen from './question-genre';

test(`<QuestionGenreScreen /> render`, () => {
  const three = renderer
    .create(<QuestionGenreScreen />).toJSON();

  expect(three).toMatchSnapshot();
});
