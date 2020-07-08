import {reducer, ActionCreator} from './reducer.js';

test(`Редьюсер должен вернуть исходное состояние без передачи дополнительных параметров`, () => {
  expect(reducer(void 0, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions: [],
  });
});

test(`Тестирование фунции reducer`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions: [],
  }, {
    type: `INC_STEP`,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions: [],
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions: [],
  }, {
    type: `INC_STEP`,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
    questions: [],
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
