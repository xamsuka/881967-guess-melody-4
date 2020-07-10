import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenreScreen from './question-genre.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

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

const mockEvent = {
  preventDefault() {},
};

test(`Clicking the answer button for a question`, () => {
  const onAnswerButtonSubmit = jest.fn();

  const questionGenreScreen = shallow(
      <QuestionGenreScreen
        renderTrack = {() => {}}
        question = {question}
        onAnswerButtonSubmit = {onAnswerButtonSubmit}
      />
  );

  const answerForm = questionGenreScreen.find(`.game__tracks`);

  answerForm.simulate(`submit`, mockEvent);

  expect(onAnswerButtonSubmit.mock.calls.length).toBe(1);
});
