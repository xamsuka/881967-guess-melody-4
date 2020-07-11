import {extend} from './utils';
import {GameType} from './const';
import {questions} from './mocks/mock.js';

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.audioSrc[i].genre === question.genre);
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
      const nextState = state.step + action.payload;

      if (nextState >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {
        step: nextState,
      });

    case ActionTypes.INC_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= state.maxMistakes) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes,
      });
  }

  return state;
};

export {reducer, ActionCreator};
