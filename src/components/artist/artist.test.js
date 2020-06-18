import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './artist.jsx';

const artist = {
  author: `Пелагея`,
  imageSrc: `https://api.adorable.io/avatars/128`,
};

test(`<Artist /> render`, () => {
  const three = renderer
    .create(<Artist author = {artist.author} imageSrc = {artist.imageSrc} indexAnswer = {`answer-1`} />).toJSON();

  expect(three).toMatchSnapshot();
});
