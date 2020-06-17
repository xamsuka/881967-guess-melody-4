import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {questions, Settings} from './mocks/mock';

const rootElement = document.querySelector(`#root`);

const init = () => {
  ReactDom.render(
      <App errorsCount = {Settings.ERROR_COUNT} questions = {questions}/>,
      rootElement);
};


init();
