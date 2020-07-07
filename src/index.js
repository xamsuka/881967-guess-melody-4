import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {reducer} from './reducer.js';
import {questions} from './mocks/mock';

const Settings = {
  ERROR_COUNT: 3,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

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
