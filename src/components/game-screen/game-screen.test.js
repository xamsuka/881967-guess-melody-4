import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import {GameType} from '../../const';

const children = <div className="children-component" />;

describe(`<Game Screen /> render`, () => {
  test(`<GameScreen> <QuestionArtistScreen /> </GameScreen> render`, () => {
    const three = renderer
      .create(<GameScreen type = {GameType.ARTIST}> {children} </GameScreen>).toJSON();

    expect(three).toMatchSnapshot();
  });

  test(`<GameScreen> <QuestionGenreScreen /> </GameScreen> render`, () => {
    const three = renderer
      .create(<GameScreen type = {GameType.ARTIST}> {children} </GameScreen>).toJSON();

    expect(three).toMatchSnapshot();
  });

});
