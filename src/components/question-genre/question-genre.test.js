import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreScreen from './question-genre';

const question = {
  type: `genre`,
  genre: `rock`,
  audioSrc: [
    {
      genre: `rock`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_541-fugue.ogg`
    },
    {
      genre: `rock`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_542-fugue.ogg`
    },
    {
      genre: `rock`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    {
      genre: `rock`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_544-fugue.ogg`
    }
  ]
};

test(`<QuestionGenreScreen /> render`, () => {
  const three = renderer
    .create(<QuestionGenreScreen question = {question} onAnswerButtonSubmit ={() => {}} />).toJSON();

  expect(three).toMatchSnapshot();
});
