import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import GameScreen from '../game-screen/game-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import {GameType} from '../../const';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {errorsCount: 3, step: -1, questions: props.questions};
    this.welcomeButtonHandler = this._welcomeButtonHandler.bind(this);
    this.answerButtonHandler = this._answerButtonHandler.bind(this);
    this.answerButtonSubmitHandler = this._answerButtonSubmitHandler.bind(this);
  }

  _welcomeButtonHandler() {
    this.setState(() => ({
      step: 0,
    }));
  }

  _answerButtonHandler() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  _answerButtonSubmitHandler(evt) {
    evt.preventDefault();
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  render() {
    const step = this.state.step;
    const question = this.state.questions[step];

    if (step === -1 || step >= this.state.questions.length) {
      return <WelcomeScreen errorsCount = {this.state.errorsCount} onWelcomeButtonClick = {this.welcomeButtonHandler} />;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return <GameScreen type = {GameType.ARTIST}>
            <QuestionArtistScreen question = {question} onAnswerButtonClick = {this.answerButtonHandler} />
          </GameScreen>;

        case GameType.GENRE:
          return <GameScreen type = {GameType.GENRE}>
            <QuestionGenreScreen question = {question} onAnswerButtonSubmit = {this.answerButtonSubmitHandler} />
          </GameScreen>;
      }
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()};
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreen question = {question} onAnswerButtonClick = {this.answerButtonHandler} />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreen question = {question} onAnswerButtonSubmit = {this.answerButtonSubmitHandler} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;


