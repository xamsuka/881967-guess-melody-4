import {extend} from './utils';
import {GameType} from './const';
import {questions} from './mocks/mock.js';

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const initialState = {
  mistakes: 0,
  step: -1,
  questions,
  maxMistakes: 3,
};

const ActionTypes = {
  INC_STEP: `INC_STEP`,
  INC_MISTAKES: `INC_MISTAKES`,
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionTypes.INC_STEP,
    payload: 1,
  }),

  incrementMistakes: (question, answer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        isAnswerCorrect = isArtistAnswerCorrect(question, answer);
        break;
      case GameType.GENRE:
        isAnswerCorrect = isGenreAnswerCorrect(question, answer);
        break;
    }

    return {
      type: ActionTypes.INC_MISTAKES,
      payload: isAnswerCorrect ? 0 : 1,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INC_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });
    case ActionTypes.INC_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator};
