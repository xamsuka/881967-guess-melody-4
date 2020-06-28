import React from 'react';
import renderer from 'react-test-renderer';
import Track from './track';

const track = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;
const questionType = `artist`;

test(`<Track /> render`, () => {
  const three = renderer
    .create(<Track audioSrc = {track} questionType = {questionType} indexTrack = {0} onPlayButtonClick = {() => {}} />).toJSON();

  expect(three).toMatchSnapshot();
});
