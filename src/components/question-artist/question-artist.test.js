import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtistScreen from './question-artist';

const question = {
  type: `artist`,
  song: {
    audioSrc: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    artist: ``
  },
  artists: [
    {
      author: `Пелагея`,
      imageSrc: `https://api.adorable.io/avatars/128`,
    },
    {
      author: `Моргенштерн`,
      imageSrc: `https://api.adorable.io/avatars/128`,
    },
    {
      author: `Элджей`,
      imageSrc: `https://api.adorable.io/avatars/128`,
    },
  ]
};

test(`<QuestionArtist /> render`, () => {
  const three = renderer
    .create(<QuestionArtistScreen question = {question} onAnswerButtonClick = {() => {}}/>).toJSON();

  expect(three).toMatchSnapshot();
});
