import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import Provider from 'react-redux';
import App from './components/app/app.jsx';
import {reducer, ActionCreator} from './reducer.js';
import {questions} from './mocks/mock';

const Settings = {
  ERROR_COUNT: 3,
};

const store = createStore(reducer);

const init = () => {
  ReactDom.render(
      <Provider store = {store}>
        <App
          errorsCount = {Settings.ERROR_COUNT}
          questions = {questions}
        />
      </Provider>,
      document.querySelector(`#root`));
};

init();
