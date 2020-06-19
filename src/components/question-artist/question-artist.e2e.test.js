import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import QuestionArtistScreen from './question-artist.jsx';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});

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

test(`Clicking the answer button for a question`, () => {
  const onAnswerButtonClick = jest.fn();

  const questionArtistScreen = shallow(
      <QuestionArtistScreen question = {question} onAnswerButtonClick = {onAnswerButtonClick}/>
  );

  const answerForm = questionArtistScreen.find(`.game__artist`);

  answerForm.props().onClick();

  expect(onAnswerButtonClick.mock.calls.length).toBe(1);
});
