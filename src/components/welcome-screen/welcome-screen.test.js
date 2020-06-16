import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

test(`Render WelcomeScreen`, () => {
  const three = renderer
    .create(
        <WelcomeScreen errorsCount = {3} onWelcomeButtonClick = {() => {}}/>
    ).toJSON();

  expect(three).toMatchSnapshot();
});
