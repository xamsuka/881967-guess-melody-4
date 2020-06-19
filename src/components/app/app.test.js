import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const questions = [
  {
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
  }
];

test(`Render App`, () => {
  const three = renderer
    .create(
        <App errorsCount = {3} questions = {questions} />
    ).toJSON();

  expect(three).toMatchSnapshot();
});
