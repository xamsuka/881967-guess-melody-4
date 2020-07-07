import {extend} from './utils';

const initialState = {
  mistakes: 0,
  step: -1,
  questions: [],
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

  incrementMistakes: () => ({
    type: ActionTypes.INC_MISTAKES,
    payload: 1,
  }),
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
