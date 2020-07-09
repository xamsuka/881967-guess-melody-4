import {reducer, ActionCreator} from './reducer.js';

const questions = [
  {
    type: `artist`,
    song: {
      audioSrc: `http://audiomod.ru/track/%D0%9B%D0%B8%D0%BD%D0%B4%D0%B0%20-%20%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%20%D1%82%D0%B0%D0%BA.wav`,
      artist: `Линда`
    },
    artists: [
      {
        author: `Пелагея`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Линда`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Элджей`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
    ]
  },
  {
    type: `genre`,
    genre: `rock`,
    audioSrc: [
      {
        genre: `rock`,
        src: `http://audiomod.ru/track/%D0%9B%D0%B8%D0%BD%D0%B4%D0%B0%20-%20%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%20%D1%82%D0%B0%D0%BA.wav`
      },
      {
        genre: `rock`,
        src: `http://audiomod.ru/track/Fl%D1%91ur%20-%20%D0%A2%D1%91%D0%BF%D0%BB%D1%8B%D0%B5%20%D0%BA%D0%BE%D1%82%D1%8B.wav`
      },
      {
        genre: `rock`,
        src: `http://audiomod.ru/track/Fl%D1%91ur%20-%20%D0%94%D0%B2%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%B0.wav`
      },
      {
        genre: `rock`,
        src: `http://audiomod.ru/track/%D0%90.%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%B5%D0%B2%D0%B8%D1%87%20&%20%D0%9E%D0%9A%D0%A2%20-%20%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%B4%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%BC.wav`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      audioSrc: `http://audiomod.ru/track/%D0%9B%D0%B8%D0%BD%D0%B4%D0%B0%20-%20%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%20%D1%82%D0%B0%D0%BA.wav`,
      artist: `Линда`
    },
    artists: [
      {
        author: `Пелагея`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Линда`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Элджей`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
    ]
  },
  {
    type: `artist`,
    song: {
      audioSrc: `http://audiomod.ru/track/%D0%9B%D0%B8%D0%BD%D0%B4%D0%B0%20-%20%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%20%D1%82%D0%B0%D0%BA.wav`,
      artist: `Линда`
    },
    artists: [
      {
        author: `Пелагея`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Линда`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Элджей`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
    ]
  },
  {
    type: `artist`,
    song: {
      audioSrc: `http://audiomod.ru/track/%D0%9B%D0%B8%D0%BD%D0%B4%D0%B0%20-%20%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%20%D1%82%D0%B0%D0%BA.wav`,
      artist: `Линда`
    },
    artists: [
      {
        author: `Пелагея`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Линда`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Элджей`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
    ]
  }
];

test(`Редьюсер должен вернуть исходное состояние без передачи дополнительных параметров`, () => {
  expect(reducer(void 0, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });
});

test(`Тестирование фунции reducer`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  }, {
    type: `INC_STEP`,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  }, {
    type: `INC_STEP`,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });
});

test(`Тестирование функции ActionCreator на возращаемые экшены`, () => {
  expect(ActionCreator.incrementStep()).toEqual({
    type: `INC_STEP`,
    payload: 1,
  });

  expect(ActionCreator.incrementMistakes({type: `artist`, song: {artist: `Test`}}, {artist: `Test`})).toEqual({
    type: `INC_MISTAKES`,
    payload: 0,
  });

  expect(ActionCreator.incrementMistakes({type: `artist`, song: {artist: `Test`}}, {artist: `Test2`})).toEqual({
    type: `INC_MISTAKES`,
    payload: 1,
  });
});
