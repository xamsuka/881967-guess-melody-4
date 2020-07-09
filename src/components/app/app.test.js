import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app';

const mockStore = configureStore([]);

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
  const store = mockStore({
    mistakes: 0,
  });

  const three = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes = {3}
            questions = {questions}
            onWelcomeButtonClick = {() => {}}
            onUserAnswer = {() => {}}
            step = {-1}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}
    ).toJSON();

  expect(three).toMatchSnapshot();
});
